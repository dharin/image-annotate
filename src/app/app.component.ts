import { Component } from "@angular/core";
// import PSPDFKit, { Instance } from "pspdfkit";
import * as markerjs2 from "markerjs2";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["app.component.scss"]
})
export class AppComponent {
	title = "PSPDFKit for Web Angular Example";
  // public pdfInstance: Instance;

  constructor() {
    // this.pdfInstance = new Instance();
  }

	ngAfterViewInit() {
    // PSPDFKit.load({
		// 	// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
		// 	baseUrl: location.protocol + "//" + location.host + "/assets/",
		// 	document: "/assets/image-test.jpeg",
		// 	container: "#pspdfkit-container",
		// }).then(instance => {
		// 	// For the sake of this demo, store the PSPDFKit for Web instance
		// 	// on the global object so that you can open the dev tools and
		// 	// play with the PSPDFKit API.
    //   // this.pdfInstance = instance;
		// 	(window as any).instance = instance;
    //   instance.addEventListener("annotations.load", loadedAnnotations => {
    //     console.log(loadedAnnotations);
    //   });
    //   instance.addEventListener("annotations.willChange", event => {
    //     if (event.reason === PSPDFKit.AnnotationsWillChangeReason.DRAW_START) {
    //       console.log("The user is drawing...");
    //     }
    //   });
    //   instance.addEventListener("annotations.change", () => {
    //     console.log("Something in the annotations has changed.");
    //   });
    //   instance.addEventListener("annotations.create", createdAnnotations => {
    //     console.log(createdAnnotations.toJSON());
    //     console.log(createdAnnotations.get(0)?.boundingBox)
    //   });
    //   instance.addEventListener("annotations.update", updatedAnnotations => {
    //     console.log(updatedAnnotations);
    //   });
    //   instance.addEventListener("annotations.delete", deletedAnnotations => {
    //     console.log(deletedAnnotations);
    //   });
		// });
	}

  // showMarkerArea(target: any): void{
  //   const markerArea = new markerjs2.MarkerArea(target);

  //   // add all marker types
  //   markerArea.availableMarkerTypes = markerArea.ALL_MARKER_TYPES;

  //   // enable redo, notes, zoom, and clear buttons (hidden by default)
  //   markerArea.uiStyleSettings.redoButtonVisible = true;
  //   markerArea.uiStyleSettings.notesButtonVisible = true;
  //   markerArea.uiStyleSettings.zoomButtonVisible = true;
  //   markerArea.uiStyleSettings.clearButtonVisible = true;

  //   markerArea.addEventListener(
  //     "render",
  //     (event) => (target.src = event.dataUrl)
  //   );
  //   markerArea.show();
  // }

  public setDivSize(): void {
    const imgElm = document.getElementById('sampleImage');
    const divElm = document.getElementById('image-overaly-div');
    if (imgElm && divElm) {
      divElm.style.width = imgElm.clientWidth + 'px';
      divElm.style.height = imgElm.clientHeight + 'px';
      divElm.style.zIndex = "2";
      divElm.style.position = "absolute";
      console.log('coming here after', divElm.style.width, divElm.style.height, divElm.style.top, divElm.style.left);
    }
  }

  public clickedOnPin(event: any): void {
    console.log(event)
    const divElm = document.getElementById('image-overaly-div');
    var leftSide = 0;
    var topSide = 0;
    leftSide = event.pageX - (divElm?.style.left ? parseInt(divElm?.style.left, 10) : 0);
    topSide = event.pageY - (divElm?.style.top ? parseInt(divElm?.style.top, 10) : 0);
    var heightImage = divElm?.clientHeight || 1,
        widthImage = divElm?.clientWidth || 1;
    var topSidePoint = ((topSide - 5) * 100) / heightImage,
        leftSidePoint = ((leftSide - 5) * 100) / widthImage;

    var topSideStore = (topSide * 100) / heightImage,
        leftSideStore = (leftSide * 100) / widthImage;

    var topSideForm = ((topSide + 25) * 100) / heightImage,
        leftSideForm = ((leftSide - 8) * 100) / widthImage;

    // console.log(topSidePoint, leftSidePoint);
    // console.log(topSideStore, leftSideStore);
    // $('.form-annotation-popup').css("top", topSideForm + "%");
    // $('.form-annotation-popup').css("left", leftSideForm +"%");
    var data = document.createElement('a');
    data.className = 'item-point annotate';
    data.setAttribute('data-top', topSidePoint.toString());
    data.style.top = topSidePoint + '%';
    data.setAttribute('data-left', leftSidePoint.toString());
    data.style.left = leftSidePoint + '%';
    // var data = '<a class="item-point" data-top="'+ topSidePoint +'" data-left="'+ leftSidePoint +'"><span class="newPoint">Hello</span></a>'
    if (divElm) {
      divElm.prepend(data);
    }
  }
}
