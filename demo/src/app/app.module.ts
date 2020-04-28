import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiSidebarModule, SuiPopupModule } from "ng2-semantic-ui";

import { DemoRoutingModule } from "./app.routing";
import { DemoComponentsModule } from "./components/demo-components.module";
import { DemoModalsModule } from "./modals/demo-modals.module";
import { DemoPagesModule } from "./pages/demo-pages.module";

import { AppComponent } from "./app.component";
import { DemoPages2Module } from "./pages2/demo-pages.module";
import { DemoPages3Module } from "./pages3/demo-pages.module";
import { DemoPages4Module } from "./pages4/demo-pages.module";
import { DemoPages5Module } from "./pages5/demo-pages.module";
import { DemoPages6Module } from "./pages6/demo-pages.module";
import { DemoPages7Module } from "./pages7/demo-pages.module";
import { DemoPages8Module } from "./pages8/demo-pages.module";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,

        SuiSidebarModule,
        SuiPopupModule,

        DemoRoutingModule,
        DemoComponentsModule,
        DemoModalsModule,
        DemoPagesModule,
        DemoPages2Module,
        DemoPages3Module,
        DemoPages4Module,
        DemoPages5Module,
        DemoPages6Module,
        DemoPages7Module,
        DemoPages8Module
    ],
    declarations: [AppComponent],
    providers: [],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
