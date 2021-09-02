/**
 * @Author       : guth
 * @Date         : 2021-08-31 14:43:57
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-31 14:43:58
 * @FilePath     : \nav-ui\src\res\interface\nav.dto.ts
 * @Description  :
 */

import { AxiosRequestConfig } from "axios";

export interface navDto extends AxiosRequestConfig {
  bh?: string;
  lj: string;
  mc: string;
  bz: string;
  xssx: number;
}
