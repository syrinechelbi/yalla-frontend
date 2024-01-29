import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-introductory-section',
  templateUrl: './introductory-section.component.html',
  styleUrls: ['./introductory-section.component.css']
})



export class IntroductorySectionComponent {
  categoryBtn: any;

  scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  changeFontSize(button: any) {
    const currentSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
    button.style.fontSize = (currentSize + 2) + 'px';
  }

  navigateToCategory(category: string, event: Event): void {
    console.log(`Navigating to category: ${category}`);
    const button = event.target as HTMLDivElement;
    this.changeFontSize(button);
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const footer = document.getElementById('footer');
    const mainContent = document.getElementById('categories'); // Remplacez 'categories' par l'ID de votre conteneur principal

    if (!footer || !mainContent) {
      return;
    }

    // Hauteur totale de la page
    const totalHeight = mainContent.clientHeight;

    // Hauteur actuelle du défilement
    const scrollHeight = window.innerHeight + window.scrollY;

    // Si la hauteur du défilement atteint la fin du contenu principal
    if (scrollHeight >= totalHeight) {
      footer.classList.remove('hidden');
    } else {
      footer.classList.add('hidden');
    }
  }


}
