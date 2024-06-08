import { Hono } from 'hono'

const app = new Hono()
async function authMiddleware(c:any,next){
  if(c.req.header("Authorization")){
    //Do validatoin
    await next();
  }
  else{
    return c.text("Bad Authorization");
  }
}

app.use(authMiddleware);

app.get('/', async (c) => {
  //body, header, queries
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text("hello hono!");
})

export default app
