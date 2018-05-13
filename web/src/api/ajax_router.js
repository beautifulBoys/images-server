import ajax from './ajax';
import ajaxForm from './ajax_form';

export const uploadAjax = data => ajaxForm('/upload', data);
export const testAjax = () => ajaxForm('/test');
