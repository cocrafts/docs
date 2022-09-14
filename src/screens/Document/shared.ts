import { DocumentParamList } from 'stacks/shared';
import { sectionMatrices } from 'utils/content';

export const extractSection = (params: DocumentParamList = {}) => {
	const { group, section, place } = params;
	const matrix = sectionMatrices[group || 'guide'];

	return {
		section: matrix.getRoute(section, place) || matrix.list[0],
		sections: matrix.list,
	};
};
