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
  UpdateManyParams,
  RaRecord,
  Identifier,
  GetListResult,
  GetOneResult,
  CreateResult,
  UpdateResult,
  DeleteResult,
  GetManyResult,
  GetManyReferenceResult,
  DeleteManyResult,
  UpdateManyResult
} from 'react-admin';

const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://quantumroboticslab.com//api';
const httpClient = fetchUtils.fetchJson;

const getApiUrl = (resource: string): string => `${apiUrl}/${resource}`;

// Define API response types
type ApiResponse<T> = {
  length?: number;
  data: T;
  total?: number;
};

export const dataProvider: DataProvider = {
  getList: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: GetListParams
  ): Promise<GetListResult<RecordType>> => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: 'id', order: 'ASC' };

    const query = {
      _sort: field,
      _order: order,
      _page: page,
      _limit: perPage,
    };

    const url = `${getApiUrl(resource)}?${stringify(query)}`;
    console.log('Fetching List:', url);

    const { json } = await httpClient(url);

    return {
      data: json.data ?? json,
      total: json.total ?? json.length,
    };
  },

  getOne: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> => {
    const url = `${getApiUrl(resource)}/${encodeURIComponent(String(params.id))}`;
    console.log('Fetching One:', url);

    const { json } = await httpClient(url);
    const response = json as ApiResponse<RecordType>;

    return { 
      data: (response.data ?? json) as RecordType 
    };
  },

  create: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: CreateParams
  ): Promise<CreateResult<RecordType>> => {
    const url = getApiUrl(resource);
    console.log('Creating:', url, params.data);

    const { json } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });

    return { 
      data: ((json as ApiResponse<RecordType>).data ?? json) as RecordType 
    };
  },

  update: async <RecordType extends RaRecord<Identifier>>(
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult<RecordType>> => {
    const url = `${getApiUrl(resource)}/${encodeURIComponent(String(params.id))}`;
    console.log('Updating:', url, params.data);

    const { json } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });

    return { 
      data: ((json as ApiResponse<RecordType>).data ?? json) as RecordType 
    };
  },

  updateMany: async <RecordType extends RaRecord<Identifier>>(
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult<RecordType>> => {
    const url = `${getApiUrl(resource)}/bulk-update`;
    console.log('Bulk Updating:', url, params.data, params.ids);

    await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify({ 
        ids: params.ids,
        data: params.data 
      }),
    });

    return { 
      data: params.ids as Identifier[] 
    };
  },

  delete: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: DeleteParams
  ): Promise<DeleteResult<RecordType>> => {
    const url = `${getApiUrl(resource)}/${encodeURIComponent(String(params.id))}`;
    console.log('Deleting:', url);

    const { json } = await httpClient(url, {
      method: 'DELETE',
    });

    return { 
      data: ((json as ApiResponse<RecordType>).data ?? json) as RecordType 
    };
  },

  getMany: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> => {
    const url = `${getApiUrl(resource)}?${stringify({ ids: params.ids.join(',') })}`;
    console.log('Fetching Many:', url);

    const { json } = await httpClient(url);
    const response = json as ApiResponse<RecordType[]>;

    return { 
      data: (response.data ?? json) as RecordType[] 
    };
  },

  getManyReference: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> => {
    const { target, id, pagination, sort } = params;
    const { page, perPage } = pagination || { page: 1, perPage: 10 };
    const { field, order } = sort || { field: 'id', order: 'ASC' };

    const query = {
      [target]: id,
      _sort: field,
      _order: order,
      _page: page,
      _limit: perPage,
    };

    const url = `${getApiUrl(resource)}?${stringify(query)}`;
    console.log('Fetching Many Reference:', url);

    const { json } = await httpClient(url);
    const response = json as ApiResponse<RecordType[]>;

    return {
      data: (response.data ?? json) as RecordType[],
      total: response.total ?? response.length ?? 0,
    };
  },

  deleteMany: async <RecordType extends RaRecord<Identifier>>(
    resource: string, 
    params: DeleteManyParams
  ): Promise<DeleteManyResult<RecordType>> => {
    const url = `${getApiUrl(resource)}/bulk-delete`;
    console.log('Bulk Deleting:', url, params.ids);

    await httpClient(url, {
      method: 'DELETE',
      body: JSON.stringify({ ids: params.ids }),
    });

    return { 
      data: params.ids as Identifier[] 
    };
  },
};
