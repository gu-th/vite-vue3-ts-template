/**
 * @Author       : guth
 * @Date         : 2021-08-30 17:22:15
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-30 17:22:16
 * @FilePath     : \nav-ui\src\res\api\groupRequest.ts
 * @Description  : 分组api
 */

import $http from '../request/http';
import { sortDto } from '../interface/dto/common.interface';
import { groupDto } from '../interface/dto/nav.interface';

const BASE_URL = 'group';

const groupApi = {
  getGroupList: (params?: sortDto | undefined) => {
    return $http.get(BASE_URL, params);
  },
  getGroup: (bh: string) => {
    return $http.get(`${BASE_URL}/${bh}`);
  },
  addGroup: (nav: groupDto) => {
    return $http.post(BASE_URL, nav);
  },
  updateGroup: (nav: groupDto, bh: string) => {
    return $http.patch(`${BASE_URL}/${bh}`, nav);
  },
  deleteGroup: (bh: string) => {
    return $http.delete(`${BASE_URL}/${bh}`);
  },
};

export default groupApi;
