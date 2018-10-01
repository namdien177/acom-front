import { Component, OnInit, Inject, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { WINDOW } from '../../WINDOW_PROVIDER';
import { DOCUMENT } from '@angular/common';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
    private MangaServices: MangaService
    ) {}

  ngOnInit() {
    this.MangaServices.getAllManga(0,5);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.isHandset$.subscribe(bool => {
      this.calculateDynamicWidth(bool);
    });

  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   // this.isHandset$.subscribe(bool => {
  //   //   this.calculateDynamicWidth(bool);
  //   // });
  // }

  @ViewChild('getWidthDesktop')
  deskCalculate: ElementRef;
  @ViewChild('getWidthMobile')
  mobileCalculate: ElementRef;

  calculateDynamicWidth(isMobile){
    let assignWidthName = "0";
    let assignWidthFrame = "0";
    if(isMobile){
      assignWidthName = this.mobileCalculate.nativeElement.offsetWidth - 32 - 32 - 1 + "px";
      assignWidthFrame = "100vw";
    }else{
      assignWidthName = this.deskCalculate.nativeElement.offsetWidth - 32 - 64 - 1 + "px";
      assignWidthFrame = "100%";
    }
    let listNameFrameResult = this.document.getElementsByClassName('name');
    for (var i = 0; i < listNameFrameResult.length; i++) {
      //@ts-ignore
      listNameFrameResult[i].style.width = assignWidthName;
    }

    let listFrameResult = this.document.getElementsByClassName('search-result');
    for (var i = 0; i < listFrameResult.length; i++) {
      //@ts-ignore
      listFrameResult[i].style.width = assignWidthFrame;
    }
  }

  
  isMobileMenu:boolean = false;

  mobileIconClick(){
    this.isMobileMenu = true;
  }

  outsideClick(){
    this.isMobileMenu = false;
  }

  searchNavBarText:string ="";
  searchResult = [];

  navSearch(){
    console.log(this.searchNavBarText);
  }

}
