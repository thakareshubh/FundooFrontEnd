import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './component/login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './component/home-page/home-page.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { GetAllNoteComponent } from './component/get-all-note/get-all-note.component';
import { DisplayComponent } from './component/display/display.component';
import { IconComponent } from './component/icon/icon.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { AuthgaurdServicesService } from './services/GaurdServices/authgaurd-services.service';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { ArchieveComponent } from './component/archieve/archieve.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipePipe } from './Pipes/filter-pipe.pipe';
import { EditLableComponent } from './component/edit-lable/edit-lable.component';







@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomePageComponent,
    GetAllNoteComponent,
    DisplayComponent,
    IconComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
    TrashNoteComponent,
    ArchieveComponent,
    FilterPipePipe,
    EditLableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,FormsModule,
    ReactiveFormsModule,BrowserAnimationsModule,
    MatInputModule,MatNativeDateModule,MatIconModule,
    HttpClientModule,MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule,MatMenuModule,
    MatDialogModule,
  ],
  providers: [
    AuthgaurdServicesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
