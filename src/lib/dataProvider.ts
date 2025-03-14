import { stringify } from 'query-string';
import {
  fetchUtils,
  DataProvider,
  GetListParams,
  GetOneParams,
  CreateParams,
  UpdateParams,
  DeleteParams,
  GetManyParams,
  GetManyReferenceParams,
  DeleteManyParams,
} from 'react-admin';

const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://quantumroboticslab.com/api';
const httpClient = fetchUtils.fetchJson;

const getApiUrl = (resource: string): string => `${apiUrl}/${resource}`;

// Define API response types
type ApiResponse<T> = {
  length: number | undefined;
  data: T;
  total?: number;
};

export const dataProvider: DataProvider = {
  getList: async <T>(resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      _sort: field,
      _order: order,
      _page: page,
      _limit: perPage,
    };

    const url = `${getApiUrl(resource)}?${stringify(query)}`;
    console.log('Fetching List:', url);

    const { json }: { json: ApiResponse<T[]> } = await httpClient(url);

    return {
      data: json.data ?? json,
      total: json.total ?? json.length,
    };
  },

  getOne: async <T>(resource: string, params: GetOneParams) => {
    const url = `${getApiUrl(resource)}/${encodeURIComponent(params.id)}`;
    console.log('Fetching One:', url);

    const { json }: { json: ApiResponse<T> } = await httpClient(url);
    return { data: json.data ?? json };
  },

  create: async <T>(resource: string, params: CreateParams) => {
    const url = getApiUrl(resource);
    console.log('Creating:', url, params.data);

    const { json }: { json: ApiResponse<T> } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });

    return { data: json.data ?? json };
  },

  update: async <T>(resource: string, params: UpdateParams) => {
    const url = `${getApiUrl(resource)}/${encodeURIComponent(params.id)}`;
    console.log('Updating:', url, params.data);

    const { json }: { json: ApiResponse<T> } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });

    return { data: json.data ?? json };
  },

  delete: async <T>(resource: string, params: DeleteParams) => {
    const url = `${getApiUrl(resource)}/${encodeURIComponent(params.id)}`;
    console.log('Deleting:', url);

    const { json }: { json: ApiResponse<T> } = await httpClient(url, {
      method: 'DELETE',
    });

    return { data: json.data ?? json };
  },

  getMany: async <T>(resource: string, params: GetManyParams) => {
    const url = `${getApiUrl(resource)}?${stringify({ ids: params.ids.join(',') })}`;
    console.log('Fetching Many:', url);

    const { json }: { json: ApiResponse<T[]> } = await httpClient(url);
    return { data: json.data ?? json };
  },

  getManyReference: async <T>(resource: string, params: GetManyReferenceParams) => {
    const { target, id, pagination, sort } = params;
    const { page, perPage } = pagination;
    const { field, order } = sort;

    const query = {
      [target]: id,
      _sort: field,
      _order: order,
      _page: page,
      _limit: perPage,
    };

    const url = `${getApiUrl(resource)}?${stringify(query)}`;
    console.log('Fetching Many Reference:', url);

    const { json }: { json: ApiResponse<T[]> } = await httpClient(url);

    return {
      data: json.data ?? json,
      total: json.total ?? json.length,
    };
  },

  deleteMany: async <T>(resource: string, params: DeleteManyParams) => {
    const url = `${getApiUrl(resource)}/bulk-delete`;
    console.log('Bulk Deleting:', url, params.ids);

    const { json }: { json: ApiResponse<T[]> } = await httpClient(url, {
      method: 'DELETE',
      body: JSON.stringify({ ids: params.ids }),
    });

    return { data: json.data ?? json };
  },
};
