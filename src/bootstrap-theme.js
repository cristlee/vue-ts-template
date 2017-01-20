import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale';
import en from 'element-ui/lib/locale/lang/en';
import nl from 'element-ui/lib/locale/lang/nl';
import 'element-ui/lib/theme-default/index.css';

locale.use(nl);
Vue.use(ElementUI);