import {School} from './school';
import {Point} from './point';


export interface Student {
  id?: number;
  name?: string;
  school?: School;
  point?: Point;
}
