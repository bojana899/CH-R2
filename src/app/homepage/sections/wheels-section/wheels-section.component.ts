import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface WheelColor {
  name: string;
  color: string;
  image: string;
}

interface Wheel {
  id: string;
  name: string;
  image: string;
  link: string;
  colors: WheelColor[];
  category: string;
}

@Component({
  selector: 'app-wheels-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './wheels-section.component.html',
  styleUrl: './wheels-section.component.css'
})
export class WheelsSectionComponent {
  selectedWheelImages: { [key: string]: string } = {};

  constructor() {
    // Initialize with default images
    this.selectedWheelImages['ci-r'] = 'assets/Startseite/Wheels/Performance Design/CI0202_PlatinumSilver_003.png';
    this.selectedWheelImages['sr'] = 'assets/Startseite/Wheels/Performance Design/SR002_HimalayaSatinGray_02.003.png';
    this.selectedWheelImages['ch-r-ii'] = 'assets/Startseite/Wheels/Motorsport Design/CH-R II 602_SatinPlatinum_001.png';
    this.selectedWheelImages['ch-r'] = 'assets/Startseite/Wheels/Motorsport Design/CH_R_102_BriliantSilver_001.png';
    this.selectedWheelImages['xr'] = 'assets/Startseite/Wheels/Motorsport Design/XR0101_PlatinumSilver_02.003.png';
    this.selectedWheelImages['cc-r'] = 'assets/Startseite/Wheels/Utility Design/CC_R_CC0101_SatinPlatinum_001.png';
    this.selectedWheelImages['sx'] = 'assets/Startseite/Wheels/Utility Design/SX0101_BrilliantSilver_003.png';
    this.selectedWheelImages['tl-a'] = 'assets/Startseite/Wheels/Utility Design/TLA0101_SatinPlatinumSilver_001.png';
  }

  selectWheelColor(wheelId: string, colorImage: string) {
    this.selectedWheelImages[wheelId] = colorImage;
  }

  getSelectedImage(wheelId: string): string {
    return this.selectedWheelImages[wheelId] || this.wheels.find(w => w.id === wheelId)?.image || '';
  }

  wheels: Wheel[] = [
    {
      id: 'ci-r',
      name: 'CI-R',
      image: 'assets/Startseite/Wheels/Performance Design/CI0202_PlatinumSilver_003.png',
      link: 'https://www.bbs.com/de/produkte-details/CI-R',
      category: 'wheels.performanceDesign',
      colors: [
        { name: 'silver', color: '#C0C0C0', image: 'assets/Startseite/Wheels/Performance Design/CI0202_PlatinumSilver_003.png' },
        { name: 'black', color: '#000000', image: 'assets/Startseite/Wheels/Performance Design/CI0202_SatinBlack_003.png' },
        { name: 'bronze', color: '#CD7F32', image: 'assets/Startseite/Wheels/Performance Design/CI0202_SatinBronze_003.png' },
        { name: 'red', color: '#FF0000', image: 'assets/Startseite/Wheels/Performance Design/CI0202_NurburgringEdition_003.png' }
      ]
    },
    {
      id: 'sr',
      name: 'SR',
      image: 'assets/Startseite/Wheels/Performance Design/SR002_HimalayaSatinGray_02.003.png',
      link: 'https://www.bbs.com/de/produkte-details/SR',
      category: 'wheels.performanceDesign',
      colors: [
        { name: 'volcano gray', color: '#808080', image: 'assets/Startseite/Wheels/Performance Design/SR002_VolcanoGrayDiamondCut_001.png' },
        { name: 'himalaya gray', color: '#A8A8A8', image: 'assets/Startseite/Wheels/Performance Design/SR002_HimalayaSatinGray_02.003.png' }
      ]
    },
    {
      id: 'ch-r-ii',
      name: 'CH-R II',
      image: 'assets/Startseite/Wheels/Motorsport Design/CH-R II 602_SatinPlatinum_001.png',
      link: 'https://www.bbs.com/de/produkte-details/CH-R-II',
      category: 'wheels.motorsportDesign',
      colors: [
        { name: 'satin platinum', color: '#C0C0C0', image: 'assets/Startseite/Wheels/Motorsport Design/CH-R II 602_SatinPlatinum_001.png' },
        { name: 'satin black', color: '#000000', image: 'assets/Startseite/Wheels/Motorsport Design/CH-R II 606_SatinBlack_001.png' },
        { name: 'satin bronze', color: '#CD7F32', image: 'assets/Startseite/Wheels/Motorsport Design/CH-R II 602_SatinBronze_Side_007.png' }
      ]
    },
    {
      id: 'ch-r',
      name: 'CH-R',
      image: 'assets/Startseite/Wheels/Motorsport Design/CH_R_102_BriliantSilver_001.png',
      link: 'https://www.bbs.com/de/produkte-details/CH-R',
      category: 'wheels.motorsportDesign',
      colors: [
        { name: 'brilliant silver', color: '#C0C0C0', image: 'assets/Startseite/Wheels/Motorsport Design/CH_R_102_BriliantSilver_001.png' },
        { name: 'satin black', color: '#000000', image: 'assets/Startseite/Wheels/Motorsport Design/CH_R_102_SatinBlack_001.png' },
        { name: 'satin titanium', color: '#878681', image: 'assets/Startseite/Wheels/Motorsport Design/CH_R_102_SatinTitanium_001.png' },
        { name: 'nürburgring', color: '#1a1a1a', image: 'assets/Startseite/Wheels/Motorsport Design/CH_R_102_Nurburgring_001.png' }
      ]
    },
    {
      id: 'xr',
      name: 'XR',
      image: 'assets/Startseite/Wheels/Motorsport Design/XR0101_PlatinumSilver_02.003.png',
      link: 'https://www.bbs.com/de/produkte-details/XR',
      category: 'wheels.motorsportDesign',
      colors: [
        { name: 'glossy black', color: '#000000', image: 'assets/Startseite/Wheels/Motorsport Design/XR0101_GlossyBlack_002.png' },
        { name: 'platinum silver', color: '#C0C0C0', image: 'assets/Startseite/Wheels/Motorsport Design/XR0101_PlatinumSilver_02.003.png' },
        { name: 'satin bronze', color: '#CD7F32', image: 'assets/Startseite/Wheels/Motorsport Design/XR0101_SatinBronze_001.png' }
      ]
    },
    {
      id: 'cc-r',
      name: 'CC-R',
      image: 'assets/Startseite/Wheels/Utility Design/CC_R_CC0101_SatinPlatinum_001.png',
      link: 'https://www.bbs.com/de/produkte-details/CC-R',
      category: 'wheels.utilityDesign',
      colors: [
        { name: 'satin black', color: '#2a2a2a', image: 'assets/Startseite/Wheels/Utility Design/CC_R_CC0101_SatinBlack_001.png' },
        { name: 'satin platinum', color: '#A8A8A8', image: 'assets/Startseite/Wheels/Utility Design/CC_R_CC0101_SatinPlatinum_001.png' },
        { name: 'diamond cut', color: '#E5E5E5', image: 'assets/Startseite/Wheels/Utility Design/CC_R_CC0101_DiamondCut_001.png' }
      ]
    },
    {
      id: 'sx',
      name: 'SX',
      image: 'assets/Startseite/Wheels/Utility Design/SX0101_BrilliantSilver_003.png',
      link: 'https://www.bbs.com/de/produkte-details/SX',
      category: 'wheels.utilityDesign',
      colors: [
        { name: 'brilliant silver', color: '#C0C0C0', image: 'assets/Startseite/Wheels/Utility Design/SX0101_BrilliantSilver_003.png' },
        { name: 'crystal black', color: '#000000', image: 'assets/Startseite/Wheels/Utility Design/SX0101_CristalBlack_02.001.png' },
        { name: 'platinum diamond cut', color: '#E5E5E5', image: 'assets/Startseite/Wheels/Utility Design/SX0101_PlatinumSilver DiamondCut_003.png' }
      ]
    },
    {
      id: 'tl-a',
      name: 'TL-A',
      image: 'assets/Startseite/Wheels/Utility Design/TLA0101_SatinPlatinumSilver_001.png',
      link: 'https://www.bbs.com/de/produkte-details/TL-A',
      category: 'wheels.utilityDesign',
      colors: [
        { name: 'glossy bronze', color: '#CD7F32', image: 'assets/Startseite/Wheels/Utility Design/TLA0101_Glossy Bronze_001.png' },
        { name: 'satin black', color: '#000000', image: 'assets/Startseite/Wheels/Utility Design/TLA0101_SatinBlack_001.png' },
        { name: 'satin platinum silver', color: '#C0C0C0', image: 'assets/Startseite/Wheels/Utility Design/TLA0101_SatinPlatinumSilver_001.png' }
      ]
    }
  ];

  getWheelsByCategory(category: string): Wheel[] {
    return this.wheels.filter(wheel => wheel.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.wheels.map(wheel => wheel.category))];
  }
}
