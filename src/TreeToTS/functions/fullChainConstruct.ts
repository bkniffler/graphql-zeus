import { StringFunction } from './models';

export const fullChainConstructFunction: StringFunction = {
  ts: `
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});
`,
  js: `
const fullChainConstruct = (fn) => (t,tName) => (o, variables) => fn(queryConstruct(t, tName)(o), variables).then(r => { 
  seekForAliases(r)
  return r
});
`,
};
