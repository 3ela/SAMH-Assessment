import { breakpointsBootstrapV5, useBreakpoints } from '@vueuse/core'

export const useLargeScreens = () => {
  const breakpoints = useBreakpoints(breakpointsBootstrapV5);
  const largeScreens = breakpoints.smallerOrEqual('md')
  
  return largeScreens;
}