import { CookieXSRFStrategy } from '@angular/http';

export function xsrfFactory(){
  return new CookieXSRFStrategy();
}
