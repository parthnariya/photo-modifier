import { useAppSelector } from "../../../../hooks/useAppDispatch";
import EffectToolbarStyle from "./EffectToolbar.style";
import Slider from "./Slider/Slider";

const EffectToolbar = () => {
  const effect = useAppSelector((state) => state.effect);
  
  return (
    <EffectToolbarStyle>
      <Slider
        title="Brightness"
        min={-100}
        max={100}
        step={1}
        value={effect.brightness}
      />
      <Slider
        title="Contrast"
        min={-100}
        max={100}
        step={1}
        value={effect.contrast}
      />
      <Slider
        title="Saturation"
        min={-100}
        max={100}
        step={1}
        value={effect.saturation}
      />
      <Slider
        title="Hue Rotate"
        min={-100}
        max={100}
        step={1}
        value={effect.hueRotate}
      />
      <Slider
        title="Pixelate"
        min={0}
        max={100}
        step={1}
        value={effect.pixelate}
      />
      <Slider title="Noise" min={0} max={100} step={1} value={effect.noise} />
      <Slider title="Invert" min={0} max={100} step={1} value={effect.invert} />
      <Slider title="Blur" min={0} max={100} step={1} value={effect.blur} />
      <Slider title="Tint" min={0} max={100} step={1} value={effect.tint} />
    </EffectToolbarStyle>
  );
};

export default EffectToolbar;
