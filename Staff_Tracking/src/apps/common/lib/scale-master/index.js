import scaledSheetCreator from './ScaledSheet';
import { scale, verticalScale, moderateScale } from './scaling-utils';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale);
export * from './scaling-utils';