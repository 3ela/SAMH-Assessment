import { breakpointsBootstrapV5, useBreakpoints } from '@vueuse/core'

export const useLargeScreens = () => {
  const breakpoints = useBreakpoints(breakpointsBootstrapV5);
  const largeScreens = breakpoints.greaterOrEqual('md')
  
  return largeScreens;
}