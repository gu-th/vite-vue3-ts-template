/**
 * @Author       : guth
 * @Date         : 2021-08-30 17:22:48
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-30 17:22:48
 * @FilePath     : \nav-ui\src\res\api\commonNavRequest.ts
 * @Description  : 公共导航api
 */

import $http from '../request/http';
import { sortDto } from '../interface/common.interface';
import { navDto } from '../interface/nav.interface';

const BASE_URL = 'common';

const commonNavApi = {
  getNavList: (params?: sortDto) => {
    return $http.get(BASE_URL, params);
  },
  getNav: (bh: string) => {
    return $http.get(`${BASE_URL}/${bh}`);
  },
  addNav: (nav: navDto, bh: string) => {
    return $http.post(`${BASE_URL}/${bh}`, nav);
  },
  updateNav: (nav: navDto) => {
    return $http.patch(BASE_URL, nav);
  },
  deleteNav: (bh: string) => {
    return $http.delete(`${BASE_URL}/${bh}`);
  },
};

export default commonNavApi;
