/**
 * @Author       : guth
 * @Date         : 2021-08-30 17:22:32
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-30 17:22:33
 * @FilePath     : \nav-ui\src\res\api\navGroupRequest.ts
 * @Description  : 分组导航api
 */
import $http from '../request/http';
import { sortDto } from '../interface/dto/common.interface';
import { groupDto } from '../interface/dto/nav.interface';

const BASE_URL = 'nav/group';

const groupNavApi = {
  getGroupNavList: (params?: sortDto) => {
    return $http.get(BASE_URL, params);
  },
  getGroupNav: (bh: string) => {
    return $http.get(`${BASE_URL}/${bh}`);
  },
  addGroupNav: (nav: groupDto) => {
    return $http.post(BASE_URL, nav);
  },
  updateGroupNav: (nav: groupDto, bh: string) => {
    return $http.patch(`${BASE_URL}/${bh}`, nav);
  },
  deleteGroupNav: (bh: string) => {
    return $http.delete(`${BASE_URL}/${bh}`);
  },
};

export default groupNavApi;
