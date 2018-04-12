import {ajax, ajaxForm} from './ajax';

export const uploadAjax = data => ajaxForm('/upload', data);
