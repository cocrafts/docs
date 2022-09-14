export interface SectionRoute {
	route: string;
	title: string;
}

export interface SectionConfig {
	id?: string;
	level?: number;
	route?: string;
	title?: string;
	previous?: SectionConfig;
	next?: SectionConfig;
	children?: SectionConfig[];
	content?: string;
	uri?: string;
}

export const baseUri = 'https://github.com/cocrafts/docs/blob/master';

export const createRoute = (
	title: string,
	configs: SectionConfig,
): SectionRoute => {
	return {
		...configs,
		title,
		route: title.replace(/ +/g, '-').toLowerCase(),
	};
};

export interface SectionMatrix {
	map: Record<string, SectionConfig>;
	list: SectionConfig[];
	getRoute: (section?: string, place?: string) => SectionConfig;
}

type SectionIterator = (
	node: SectionConfig,
	path: string,
	level: number,
) => void;

const sectionWalk = (
	node: SectionConfig,
	iterator: SectionIterator,
	path = '',
	level = 0,
) => {
	iterator(node, path, level);

	node.children?.forEach?.((child) => {
		iterator(child, [path, node.route].join('/'), level + 1);
	});
};

export const createSectionMatrix = (
	sections: SectionConfig[],
): SectionMatrix => {
	let lastNode: SectionConfig = {};
	const map: Record<string, SectionConfig> = {};
	const list: SectionConfig[] = [];

	for (let i = 0; i < sections.length; i += 1) {
		sectionWalk(sections[i], (node, path, level) => {
			node.id = [path, node.route].join('/');
			node.level = level;
			node.previous = lastNode;
			lastNode.next = node;
			lastNode = node;
			map[node.id] = node;
			list.push(node);
		});
	}

	return {
		map,
		list,
		getRoute: (section, place) => {
			const routeId = [section, place].filter((i) => !!i).join('/');

			return map[`/${routeId}`];
		},
	};
};
