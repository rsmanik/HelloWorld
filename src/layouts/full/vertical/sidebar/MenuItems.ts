import { uniqueId } from 'lodash';
import {
  IconPackage,
  IconAperture
} from '@tabler/icons';


interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}



const Menuitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/dashboard',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'My Courses',
    icon: IconPackage,
    href: '/mycourse',
    chipColor: 'secondary',
  }
];

export default Menuitems;
