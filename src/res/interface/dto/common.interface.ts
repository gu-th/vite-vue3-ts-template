/**
 * @Author       : guth
 * @Date         : 2021-08-31 14:55:45
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-31 14:55:45
 * @FilePath     : \nav-ui\src\res\interface\common.interface.ts
 * @Description  :
 */
import { AxiosRequestConfig } from 'axios';

export interface sortDto extends AxiosRequestConfig {
  sort?: string;
  isAsc?: boolean;
}
