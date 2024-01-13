import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppDispatch";
import {
  changeBlur,
  changeBrightness,
  changeContrast,
  changeHueRotate,
  changeInvert,
  changeNoise,
  changePixelate,
  changeSaturation,
  changeTint,
} from "../../../../store/slices/effectSlice/effectSlice";
import { EffectType } from "../../../../types/effectType.type";
import EffectToolbarStyle from "./EffectToolbar.style";
import Slider from "./Slider/Slider";

const EffectToolbar = () => {
  const effect = useAppSelector((state) => state.effect);
  const dispatch = useAppDispatch();
  const onChangeHandler = (effectType: string, value: number) => {
    switch (effectType) {
      case EffectType.BRIGHTNESS:
        dispatch(changeBrightness(value));
        break;

      case EffectType.CONTRAST:
        dispatch(changeContrast(value));
        break;

      case EffectType.SATURATION:
        dispatch(changeSaturation(value));
        break;

      case EffectType.HUE_ROTATE:
        dispatch(changeHueRotate(value));
        break;

      case EffectType.PIXELATE:
        dispatch(changePixelate(value));
        break;

      case EffectType.NOISE:
        dispatch(changeNoise(value));
        break;

      case EffectType.INVERT:
        dispatch(changeInvert(value));
        break;

      case EffectType.BLUR:
        dispatch(changeBlur(value));
        break;

      case EffectType.TINT:
        dispatch(changeTint(value));
        break;
    }
  };
  return (
    <EffectToolbarStyle>
      <Slider
        title={EffectType.BRIGHTNESS}
        min={-100}
        max={100}
        step={1}
        value={effect.brightness}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.CONTRAST}
        min={-100}
        max={100}
        step={1}
        value={effect.contrast}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.SATURATION}
        min={-100}
        max={100}
        step={1}
        value={effect.saturation}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.HUE_ROTATE}
        min={-100}
        max={100}
        step={1}
        value={effect.hueRotate}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.PIXELATE}
        min={0}
        max={100}
        step={1}
        value={effect.pixelate}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.NOISE}
        min={0}
        max={100}
        step={1}
        value={effect.noise}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.INVERT}
        min={0}
        max={100}
        step={1}
        value={effect.invert}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.BLUR}
        min={0}
        max={100}
        step={1}
        value={effect.blur}
        onChangeHandler={onChangeHandler}
      />
      <Slider
        title={EffectType.TINT}
        min={0}
        max={100}
        step={1}
        value={effect.tint}
        onChangeHandler={onChangeHandler}
      />
    </EffectToolbarStyle>
  );
};

export default EffectToolbar;
