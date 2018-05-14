import ajax from './ajax';
import AjaxForm from './ajax_form';

// export const uploadAjax = data => ajaxForm('/upload', data);
export const uploadAjax = (fn, data) => new AjaxForm(fn).post('/upload', data);
export const testAjax = () => ajax('/test');
