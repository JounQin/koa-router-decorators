import { Context } from 'koa'

import { Controller, Method, RequestMapping } from '../lib'

@Controller
export class MethodsController {
  @RequestMapping({
    method: [Method.GET, Method.POST],
    path: '/methods',
  })
  public methods(ctx: Context) {
    ctx.body = 'methods'
  }
}
