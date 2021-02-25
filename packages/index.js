import '@/modules/styles/index.scss';
import '@/modules/icons/iconfont.css';

import lifeNavbar from '@/components/life-navbar';
import lifeDialog from '@/components/life-dialog';

const components = [lifeNavbar, lifeDialog];

const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};

if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export { install, lifeNavbar, lifeDialog };

export default {
  install,
};
