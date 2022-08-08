export const groupBy = (data: any[], key: string) =>
  data.reduce((rv: any, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
