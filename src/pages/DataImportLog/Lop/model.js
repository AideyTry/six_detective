/*
 * @Des: data import log model
 * @Author: iron
 * @Email: chenggang@szkingdom.com.cn
 * @Date: 2019-11-30 09:44:56
 * @LastEditors: iron
 * @LastEditTime: 2019-12-07 19:55:30
 */

import { request } from '@/utils/request.default';

export async function getLogs(params = {}) {
  const { page = 1, pageSize = 10, ...rest } = params;
  return request('get_lop_proc_progress_list_page', {
    data: {
      pageNumber: page.toString(),
      pageSize: pageSize.toString(),
      ...rest,
    },
  });
}

export async function postManual(params) {
  return request('set_lop_report_manual_import', { data: params });
}

export async function postAuto(params) {
  return request('set_lop_report_auto_import', { data: params });
}

export const pageSelector = ({ lop }) => lop.page;

export default {
  namespace: 'lop',
  state: {
    logs: [],
    total: 0,
  },
  reducers: {
    save(state, { payload }) {
      const { logs, total } = payload;
      return {
        ...state,
        logs,
        total,
      };
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const { items, totalCount, err } = yield call(getLogs, payload);

      if (err) {
        throw new Error(err);
      }

      yield put({
        type: 'save',
        payload: {
          logs: items,
          total: totalCount,
        },
      });
    },
    *importByManual({ payload }, { call, put }) {
      const { err } = yield call(postManual, payload);
      if (err) {
        throw new Error(err);
      }
      yield put({ type: 'reload' });
    },
    *importByAuto({ payload }, { call, put }) {
      const { err } = yield call(postAuto, payload);
      if (err) {
        throw new Error(err);
      }
      yield put({ type: 'reload' });
    },
    *reload({ payload }, { put }) {
      yield put({ type: 'fetch', payload });
    },
  },
};