export class SizeConfig {
  static screenWidth: number = 0;
  static screenHeight: number = 0;
  static textMultiplier: number = 0;
  static imageSizeMultiplier: number = 0;
  static heightMultiplier: number = 0;
  static widthMultiplier: number = 0;

  constructor(width: number, height: number) {
    SizeConfig.screenWidth = width;
    SizeConfig.screenHeight = height;

    SizeConfig.textMultiplier = height / 100;
    SizeConfig.imageSizeMultiplier = width / 100;
    SizeConfig.heightMultiplier = height / 100;
    SizeConfig.widthMultiplier = width / 100;
  }
}
