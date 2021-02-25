export default function() {
  let req = require.context('@/components', true, /\.vue$/);
  let modules = [];
  req.keys(req).forEach((key) => {
    modules.push(req(key).default);
  });
  return modules;
}
