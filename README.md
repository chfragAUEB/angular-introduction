# Εισαγωγή στo Angular Framework

## 21. Porting Components to Angular Material

- `npm i css-fx-layout` για να μπορούμε εύκολα να χρησιμοποιούμε το flexbox στα template:
  1. styles.css -> styles.scss (angular.json)
  2. προσθήκες από το https://t.ly/UFt0D
- Εκκαθάριση του `app.component.ts` (πλέον έχουμε υλοποιήσει routing μέσω του `app.routes.ts` και μόνο εκεί θα γίνονται import τα components που αφορούν στο μενού)
- Porting του `EventBindComponent`:

  1. Προσθήκη route στο `app.routes.ts`:

  ```typescript
  import { Routes } from "@angular/router";

  import { WelcomeComponent } from "./welcome/welcome.component";
  import { EventBindComponent } from "./event-bind/event-bind.component";

  export const routes: Routes = [
    { path: "home", component: WelcomeComponent },
    { path: "event-bind", component: EventBindComponent },
  ];
  ```

  2. Προσθήκη επιλογής στο μενού της εφαρμογής (`application-layout.component.html`) προς το path του route με χρήση του `routerLink`:

  ```html
  ...
  <a mat-list-item routerLink="home">Home</a>
  <a mat-list-item routerLink="event-bind">Event Binding</a>
  ...
  ```

  3. Χρήση του Angular material και του `css-fx-Layout` στο template του `EventBindingComponent`

- Porting του Crud demo:

  1. Αλλαγή στο template του `ApplicationLayoutComponent` στο μενού με τις υποεπιλογές:

  ```html
    <mat-expansion-panel-header>
        <mat-panel-title> CRUD Demo </mat-panel-title>
      </mat-expansion-panel-header>

      <a mat-list-item routerLink="crud-demo/create">Create</a>
      <a mat-list-item routerLink="crud-demo/read">Read</a>
      <a mat-list-item routerLink="crud-demo/update">Update</a>
      <a mat-list-item routerLink="crud-demo/delete">Delete</a>
      <a mat-list-item routerLink="crud-demo/delete">List</a>
    </mat-expansion-panel>
  ```

  2. Δημιουργία των routes στο αρχείο `app.routes.ts`

  3. Μεταφορά του `ListUsersComponent` στο Angular material και χρήση του `MatTable`

  4. Μεταφορά του `CrudUserSearch` στο Angular Material

## 20. Router Module primer

- Σκοπός μας είναι να κάνουμε επιλογές από το μενού στα αριστερά και τα component να εμφανίζονται στο χώρο δεξιά.
- Δημιουργία του Welcome component, αυτό που θα εμφανίζεται πρώτο όταν ξεκινήσει η εφαρμογή (χρησιμοποιεί κι ένα λογότυπο από το `/assets`):
  ```bash
  ng g c welcome
  ```
- Δημιουργία αρχείου `app.routes.ts` που θα περιέχει τον κατάλογο των path που εμφανίζονται στο μενού της εφαρμογής με το Angular component που αντιστοιχεί στο path.

  ```typescript
  import { Routes } from "@angular/router";

  import { WelcomeComponent } from "./welcome/welcome.component";

  export const routes: Routes = [{ path: "home", component: WelcomeComponent }];
  ```

- Για να είναι εφικτή λειτουργικά η αντιστοίχηση είναι απαραίτητο να επέμβουμε στο `app.config.ts`:

  ```typescript
  ...
  import { provideRouter } from '@angular/router';
  import { routes } from './app.routes';

  export const appConfig: ApplicationConfig = {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideAnimations(),
      provideRouter(routes),
    ],
  };
  ```

- Τότε γίνεται εφικτή η χρήση του routerLink στα templates (συμπεριλαμβάνουμε το RouterModule στο κατάλογο των imports του `ApplicationLayoutComponent`):

  ```typescript
  ...
  import { RouterModule } from '@angular/router';

  @Component({
    selector: 'app-application-layout',
    standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
  ...
  ```

- Το ακριβές σημείο στο template που θα εισάγονται τα component δηλώνεται με τη χρήση του tag `<router-outlet>`:

  ```html
  ...
  </mat-toolbar>
    <div class="container"><router-outlet></router-outlet></div>
  <footer class="footer">
  ...
  ```

- Παράδειγμα ροής για μια επιλογή του χρήστη:
  1. Ο χρήστης επιλέγει κάτι από το μενού που στην HTML το tag που αφορά την επιλογή συμπεριλαμβάνει την οδηγία `routerLink`, π.χ. στο `application-layout.component.html` το tag `<a mat-list-item routerLink="home">Home</a>`.
  2. Ο έλεγχος μεταβιβάζεται στο αρχείο `app.routes.ts` όπου γίνεται αναζήτηση στον πίνακα `routes` για την εύρεση του αντικειμένου που έχει τιμή στο χαρακτηριστικό `path` ίδια με την τιμή του `routerLink` στο tag από το βήμα 1.
  3. Στο πλαίσιο του `<router-outlet></router-outlet>` εμφανίζεται το component από το χαρακτηριστικό του αντικειμένου του βήματος 2.

## 19. Angular Material UI

- Ενσωμάτωση του [Angular Material UI](https://material.angular.io/)

  - ```bash
    ng add @angular/material

    ℹ Using package manager: npm
    ✔ Found compatible package version: @angular/material@16.2.10.
    ✔ Package information loaded.

    The package @angular/material@16.2.10 will be installed and executed.
    Would you like to proceed? Yes
    ✔ Packages successfully installed.
    ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
      [ Preview: https://material.angular.io?theme=indigo-pink ]
    ? Set up global Angular Material typography styles? Yes
    ? Include the Angular animations module? Include and enable animations
    UPDATE package.json (1146 bytes)
    ✔ Packages installed successfully.
    UPDATE src/app/app.config.ts (328 bytes)
    UPDATE angular.json (3151 bytes)
    UPDATE src/index.html (587 bytes)
    UPDATE src/styles.css (214 bytes)
    ```

  - Διαγράφουμε τις ρυθμίσεις του bootstrap στο `angular.json`:
    ```json
    ...
    "styles": [
              "@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.css"
            ],
    "scripts": []
    ...
    ```
  - Δημιουργούμε ένα νέο component που θα περιέχει το material design layout της εφαρμογής μας (component, template, css):
    ```bash
    ng g c application-layout
    ```
  - Στο `app.component.html` έχουμε μόνο ένα component (αφού συμπεριλαμβάνουμε το `ApplicationLayoutComponent` στον πίνακα `imports` του `app.component.ts`):
    ```html
    <app-application-layout></app-application-layout>
    ```

## 18. CRUD users: Update User

- Δημιουργία του `CrudUserFormComponent` στον κατάλογο `src/app/crud-demo/utils`. Πρακτικά αντιγράψαμε το component από το `08-Reactive-Forms` branch. Καθώς όμως πρόκειται για την περίπτωση του Update χρειάζεται να επέμβουμε στο `FormGroup` και να προσθέσουμε το πεδίο `id` γιατί μόνο έτσι θα είναι εφικτή η πράξη του Update (μεταβολή των στοιχείων του χρήστη με το **συγκεκριμένο id**):
  ```typescript
  form = new FormGroup({
      id: new FormControl(0),     // Είναι απαραίτητη αυτή η εισαγωγή για το Update!
      givenName: new FormControl('', Validators.required),
      surName: new FormControl('', Validators.required),
      age: new FormControl(0, [
        Validators.required,
        Validators.min(18),
        Validators.max(120),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      photoURL: new FormControl(''),
    });
  ```
- Το `CrudUserFormComponent` διαφέρει από το `ReactiveFormComponent` και σε ένα άλλο σημείο: δέχεται σαν Input τα στοιχεία του χρήστη που ενδεχομένως να επεξεργαστεί η φόρμα (αν δεν περάσει κάποια τιμή στο Input τότε η φόρμα θα χρησιμοποιηθεί για τη δημιουργία χρήστη, ενώ αν περάσει Input τότε η φόρμα θα επεξεργαστεί τα στοιχεία του χρήστη).
- Στην περίπτωση που περάσει κάποιο Input τότε χρειάζεται να επέμβουμε στο χαρακτηριστικό `form` και να αλλάξουμε τις τιμές των πεδίων του ώστε να μην είναι κενά αλλά να περιέχουν πλέον τα δεδομένα του χρήστη που πέρασε σαν Input. Αυτό γίνεται αν η κλάση του component υλοποιήσει το interface `OnChanges`:
  ```typescript
  export class CrudUserFormComponent implements OnChanges {
  ...
  @Input() personInput: Person | undefined;
  ...
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personInput']?.currentValue) {
      this.form.patchValue(changes['personInput'].currentValue);
    }
  }
  ```
- Στη μέθοδο `ngOnChanges` περνά αυτόματα σαν παράμετρος το αντικείμενο `changes` που περιέχει σαν χαρακτηριστικά όλα τα ορισμένα Input του component. Στην περίπτωσή μας το Input `personInput` είναι προσβάσιμο με `changes['personInput']` (δεν χρησιμοποιείται το dot notation γιατί το Angular Framework δεν είναι δυνατό να γνωρίζει εκ των προτέρων το όνομα που θα δώσουμε στο Input).
- Η τιμή του Input είναι προσβάσιμη με το `changes['personInput']?.currentValue`.
- Χρησιμοποιούμε την τιμή σε συνδυασμό με το `patchValue` του αντικειμένου form για να αρχικοποιήσουμε τις τιμές των πεδίων της φόρμας με τα δεδομένα που πέρασαν σαν Input
- Ενημέρωση του `AppService` για τη διαδικασία του Update:
  ```typescript
  updateUser(user: Person) {
    console.log('SERVICE', user);
    return this.http.put<Person>(`${API}/${user.id}`, user);
  }
  ```

## 17. CRUD users: Utility Components

- Δημιουργία του `CrudUserSearchComponent` στον κατάλογο `src/app/crud-demo/utils`. Πρόκειται για μεταφορά από το `ReadUserComponent` της λειτουργίας της αναζήτησης όπου ο χρήστης εισάγει στο πλαίσιο το id και με το πλήκτρο της αναζήτησης χρησιμοποιούμε το `AppService` για να ανασύρουμε από τη βάση τις πληροφορίες του χρήστη. Οι πληροφορίες του χρήστη μεταφέρονται στο component γονέα με κατάλληλο custom event που μεταφέρει data τύπου `Person`.
- Δημιουργία του `DangerAreYouSureComponent` με σκοπό την εισαγωγή επιβεβαίωσης από το χρήστη πως είναι σύμφωνος για μια "καταστροφική" ενέργεια (π.χ. τη διαγραφή του χρήστη). Η επιβεβαίωση μεταφέρεται στο component γονέα με κατάλληλο custom event που μεταφέρει ένα boolean (true: ο χρήστης είναι σύμφωνος με την "καταστροφική" ενέργεια, αντίστοιχα για το false).
- Χρήση των δύο νέων component στο `DeleteUSerComponent`:
    ```html
    <div class="d-flex flex-column gap-2">
      <app-crud-user-search
        (userFound)="onUserFound($event)"
      ></app-crud-user-search>
    
      <div *ngIf="foundUser" class="d-flex flex-column gap-2">
        <app-person-card [person]="foundUser"></app-person-card>
        <app-danger-are-you-sure
          (confirm)="onConfirm($event)"
        ></app-danger-are-you-sure>
      </div>
    </div>
    ```

## 16. CRUD users: Housekeeping

- Από λάθος πληκτρολόγησης πήγαμε από το 14 στο 16
- Δημιουργήσαμε ένα υποκατάλογο `src/app/crud-demo/crud` με σκοπό να τακτοποιήσουμε εκεί όλα τα CRUD components (κατάλογοι `create-user`, `read-user`, `update-user`, `delete-user`)
- Κάναμε drag and drop τα 4 directories από τον κατάλογο `src/app/crud-demo` στον κατάλογο `src/app/crud-demo/crud`
- Δημιουργήσαμε υποκατάλογο `src/app/crud-demo/utils` και μετακινήσαμε εκεί με drag and drop τον κατάλογο `list-users`
- Σε κάθε βήμα μετακίνησης ο VSCODE μας βοηθάει με κατάληλα μηνύματα και ενημερώνει τα import paths όπου χρειάζεται. Αρκεί να αποδεχτούμε τις προτροπές "Update imports for ...?" για να βρεθούμε ξανά σε λειοτυργική κατάσταση

## 14. CRUD users: Delete 

- Σχεδόν ίδια περίπτωση με το branch 12-Users-CRUD-Read-Users
- Χρησιμοποιούμε την ίδια υπο-φόρμα που ζητά το user id και στη συνέχεια αντί να αναζητήσει με σκοπό τη μεταφορά των δεδομένων στο template καλεί τη διαδικασία της διαγραφής από το AppService.

## 13. CRUD users: Create User

- Άμεση χρήση του παραδείγματος της Reactive Form από το branch 08-Reactive-Forms

## 12. CRUD users: Read User

- Πρόσβαση σε template variable μέσω του `@ViewChild`:
  ```typescript
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;
  ...
  const id = this.userIdInput.nativeElement.value;
  ```
- Πέρασμα αντικειμένου με χαρακτηριστικά `next`, `error` και `complete` και τιμές τα αντίστοιχα callbacks σαν όρισμα στο subscribe στην κλήση του `HttpClient` που γίνεται διαμέσου του `AppService`:
  ```typescript
  ... this.service.action(parameters).subscribe({
    next: (data) => {
      // do something with data
    },
    error: (error) => {
      // handle the error
    },
    complete: () => {
      // The operation completed
    });
  ```

## 11. CRUD users: List Users

- Δημιουργία component που εμφανίζει όλους τους χρήστες "της βάσης του json-server"
- Χρησιμοποιεί το `AppService` στο `ngOnInit` για να λάβει δεδομένα από "τη βάση" και να τα θέσει σαν τιμή του χαρακτηριστικού `users`.

## 10. CRUD users scaffolding

- Δημιουργία υποεφαρμογής "CRUD χρηστών" στον κατάλογο `crud-demo`:
  ```
  ng g c crud-demo/crud-demo
  ng g c crud-demo/create-user
  ng g c crud-demo/read-user
  ng g c crud-demo/update-user
  ng g c crud-demo/delete-user
  ng g c crud-demo/list-users
  ```
- Χρήση του `<ng-container>`, `[ngSwitch]`, `*ngSwitchCase` και συνδυασμός τους με τον click handler ενός dropdown για την πλοήγηση ανάμεσα στα component παιδιά.

## 9. Http Client

- npm i -g json-server
- create users.json from users table, added id field
- json-server --watch users.json
- ng generate service app --dry-run
  CREATE src/app/app.service.spec.ts (342 bytes)
  CREATE src/app/app.service.ts (132 bytes)
- Για να μπορέσουμε να χρησιμοποιήσουμε το HttpClient πρέπει να το προσθέσουμε στο app.config.ts:

  ```typescript
  import { ApplicationConfig, importProvidersFrom } from "@angular/core";
  import { HttpClientModule } from "@angular/common/http";

  export const appConfig: ApplicationConfig = {
    providers: [importProvidersFrom(HttpClientModule)],
  };
  ```

- Get all users στο app.service
- Constructor inject app service στο app component
- Αρχικοποίηση του πίνακα user στο ngOnInit

## 8. Reactive forms

Η φόρμα ορίζεται στο component και συνδέεται με τα input του template. Ένας click handler μεταφέρει τα δεδομένα στο component και στη συνέχεια ένα EventEmitter μεταφέρει τα δεδομένα στο component γονέα.

- Χρήση του `ReactiveFormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να μπορούν να συσχετιστούν με τα χαρακτηριστικά του component).
- Χρήση των κλάσεων `FormGroup` και `FormControl` για τη δόμηση του αντικειμένου που παράγεται από τη φόρμα. Χρήση των `Validators`.
- Δέσμευση του χαρακτηριστικού `form` του component με χρήση του `<form [formGroup]="form">...</form>`.
- Σύνδεση του input με το `FormControl` με χρήση του `formControlName`.
- Άμεση πρόσβαση στο πεδίο της φόρμας με το `form.get('όνομα πεδίου')`
- Κατά το Submit το χαρακτηριστικό `form` έχει ήδη τιμή στο component.

## 7. Template driven forms

Η φόρμα ορίζεται στο template και μεταφέρει δεδομένα στο component κατά την υποβολή της. Συνήθως τότε, ένα EventEmitter μεταφέρει τα δεδομένα στο component γονέα.

- Χρήση του `FormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να δημιουργούνται objects από τις φόρμες).
- `<form #form="ngForm">...</form>` ορίζει πως η HTML φόρμα δημιουργεί ένα αντικείμενο που είναι διαχειρίσιμο στα πλαίσια του template με τη μεταβλητή (template variable) `form`.
- Το αντικείμενο `form` περνά σαν όρισμα στο `onSubmit(form)` όταν συμβεί το event `onSubmit` (ελέγχεται από το κουμπί Submit που μπορεί να πατηθεί μόνο όταν η φόρμα είναι ορθά συμπληρωμένη (valid)).
- Δίνουμε στο name του input το όνομα του χαρακτηριστικού του αντικειμένου που παράγει η φόρμα και σχετίζεται (το χαρακτηριστικό) με το συγκεκριμένο input. Το συγκεμριμένο χαρακτηριστικό συμμετέχει στο αντικείμενο μόνο αν συμπεριλάβουμε την οδηγία `ngModel`.
- Με το `#givenName="ngModel"` δηλώνουμε τη μεταβλητή template με όνομα `givenName` που είναι αντικείμενο που μπορεί να εξεταστεί για την ορθότητά του με το `givenName.invalid` και να χρησιμοποιηθεί για την υπο συνθήκη εμφάνιση επεξηγηματικού κειμένου για το ενδεχόμενο λάθος ορθότητας.

## 6. Component Output

- Χρήση του decorator `@Output()` σε χαρακτηριστικό της κλάσης για τη δημιουργία custom event στο component. Συνδυάζεται με το interface `EventEmitter<T>` όπου `Τ` ο τύπος των δεδομένων που μεταδίδει το custom event.
- To custom event συνήθως προκύπτει από ένα standard event στο template του component (πχ click πάνω σε ένα κουμπί).

> Χρήση του `index` με το \*ngFor (αυτόματη αρίθμηση με το `i` κατά τη διάσχιση του πίνακα):
>
> ```html
> <tr *ngFor="let user of userData; index as i">
>   <td>{{ i }}</td>
> </tr>
> ```

- Δεσμεύουμε τα custom events ενός child component δημιουργώντας event handlers όπως ακριβώς με τα standard events. Π.χ. στο template του parent component:

  ```html
  <app-output-demo [userData]="users" (deleteUser)="onDeleteUser($event)" (sendUser)="onSendUser($event)"> </app-output-demo>
  ```

- Στη συνέχεια δημιουργούμε στην κλάση του parent component τους event handlers:

  ```typescript
  onDeleteUser(i: number) {
    this.users.splice(i, 1);
  }

  onSendUser(user: Person) {
    this.sentUser = user;
  }
  ```

## 5. Event Binding (data flow από το template προς τον controller)

> Εγκατάσταση του Bootstrap στην εφαρμογή μας:
>
> ```
> npm i bootstrap
> ```
>
> Στη συνέχεια προσθέτουμε στο αρχείο `angular.json` στο block `projects > angular-introduction > architect > build > options`:
>
> ```json
> ...
> "styles": [
>              "node_modules/bootstrap/dist/css/bootstrap.min.css",
>              "src/styles.css"
>            ],
>            "scripts": [
>              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
>            ]
> ...
> ```

- Για κάθε event που μπορεί να συμβεί στο template έχουμε τη δυνατότητα να δεσμεύσουμε σε αυτό μια μέθοδο της κλάσης του component. Τα events δεσμεύονται αν περικλείσουμε το όνομά τους σε παρενθέσεις, π.χ. `(click)="onClick()"`. Οι μέθοδοι που δεσμεύονται με τα events λέγονται _envent handlers_.
- Στα κουμπιά του template μπορούμε μπορούμε να δεσμεύσουμε τον ίδιο ή διαφορετικούς click handlers.
- Χρήση του `(input)="onInput($event)"` στην περίπτωση που πρέπει να μεταφέρουμε πίσω στον controller τα δεδομένα που πληκτρολόγησε ο χρήστης (περνά πίσω στον input handler to πλήρες event). Για να εξάγουμε τα δεδομένα στον controller:
  ```typescript
  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }
  ```
- To `userInput` μπορεί να περνά πίσω στο template με χρήση one way bind `{{ userInput }}` και με αυτόν το τρόπο υλοποιείται **two way bind**: data από το template περνούν πίσω στον controller και αυτόματα ξανά πίσω στο template.

## 4. `*ngFor` directive

- Στα templates μπορούμε να επαναλάβουμε την εμφάνιση οποιουδήποτε HTML tag που μπορεί να είναι και component selector με τη χρήση του directive `*ngFor`:
  ```html
  <app-person-alt *ngFor="let user of users" [person]="user"></app-person-alt>
  ```
- Διατρέχει τον πίνακα `users` και σε κάθε επανάληψη η μεταβλητή `user` περιέχει το τρέχον αντικείμενο που περνά σαν input στην κλάση `PersonAltComponent`.

## 3. Alternate component input - `*ngIf` directive

- Η αρχικοποίηση ενός input σε ένα componnent γίνεται συνήθως με τον τύπο `<Τype>|undefined` (αν περαστούν δεδομένα θα έχουν τον τύπο τους αλλιώς το input είναι `undefined`).
- Για να εμφανίσουμε ή αποκρύψουμε στο template υπό μια συνθήκη χρησιμοποιούμε το `*ngIf` directive.
- Με το `<ng-container>` ομαδοποιούμε κώδικα HTML σε block που πάνω του μπορεί να εφαρμοστεί το `*ngIf` (το ίδιο μπορεί να γίνει αν περικλείσουμε τον HTML κώδικα με `<div>`).
- To `*ngIf` μπορεί να πάρει `else` προς ένα `#id` ενός HTML block που περικλείεται από το `<ng-template>`. Σε ένα template μπορεί να υπάρχουν πολλά `<ng-template>` blocks με διαφορετικά `#id`s.

## 2. Component input

Δημιουργία interface για τα δεδομένα **τύπου Person**:

```
ng generate interface interfaces/person --dry-run
CREATE src/app/interfaces/person.ts (28 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

- Χρήση του decorator `@Input()` στο χαρακτηριστικό `person`, τύπου `Person`, στην κλάση `PersonComponent`.
- Ανάγκη αρχικοποίησης του χαρακτηριστικού με μια αρχική τιμή για τα δεδομένα.
- Έλεγχος εμφάνισης της αρχικής τιμής δεδομένων στην περίπτωση που δεν περνά είσοδος στο component.
- Μεταφορά δεδομένων του χαρακτηριστικού person πίσω στην κλάση `AppComponent`.
- Δέσμευση του χαρακτηριστικού εισόδου `person` της κλάσης `PersonComponent` με το χαρακτηριστικό `person` της κλάσης `AppComponent`: Στο `app.component.html` χρησιμοποιούμε τα brackets `[...]`:
  ```html
  ... <app-person [person]="person"></app-person>
  ```

## 1. Δημιουργία νέου component

```
ng generate component person --dry-run
```

Μας δείχνει τι ακριβώς θα παραχθεί χωρίς όμως να δημιουργεί πραγματικά τα αρχεία

```
CREATE src/app/person/person.component.css (0 bytes)
CREATE src/app/person/person.component.html (21 bytes)
CREATE src/app/person/person.component.spec.ts (554 bytes)
CREATE src/app/person/person.component.ts (297 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

- Μεταφορά του χαρακτηριστικού `person` από την κλάση `AppComponent` στην κλάση `PersonComponent`.
- Διαπίστωση πως το css χρειάζεται επίσης να μεταφερθεί στο `person.component.css`.

## 0. Απλή δέσμευση χαρακτηριστικού

- Απλή δέσμευση (simple binding) χαρακτηριστικού της κλάσης του component στο template του component.
- Χρήση του placholder `{{<attribute_name>}}`.
- Αντικείμενο person και δέσμευση αντικειμένου στο template.
- Χαρακτηριστικά του person σε ιδιαίτερα κελιά στον πίνακα του template.

## -1. Εγκατάσταση του Angular Command Line:

```
npm install -g @angular/cli@latest
```

Έλεγχος εγκατάστασης:

```
ng version
```

Ενδεικτικό output:

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 16.2.6
Node: 18.16.0
Package Manager: npm 9.6.6
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1602.6 (cli-only)
@angular-devkit/core         16.2.6 (cli-only)
@angular-devkit/schematics   16.2.6 (cli-only)
@schematics/angular          16.2.6 (cli-only)
```

Δημιουργία νέας εφαρμογής:

```
ng new angular-introduction --standalone
```

Ενδεικτικό output:

```
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
            Standalone application structure is new and not yet supported by many existing 'ng add' and 'ng update' integrations with community libraries.
CREATE angular-introduction/README.md (1073 bytes)
CREATE angular-introduction/.editorconfig (274 bytes)
CREATE angular-introduction/.gitignore (548 bytes)
CREATE angular-introduction/angular.json (3020 bytes)
CREATE angular-introduction/package.json (1051 bytes)
CREATE angular-introduction/tsconfig.json (901 bytes)
CREATE angular-introduction/tsconfig.app.json (263 bytes)
CREATE angular-introduction/tsconfig.spec.json (273 bytes)
CREATE angular-introduction/.vscode/extensions.json (130 bytes)
CREATE angular-introduction/.vscode/launch.json (470 bytes)
CREATE angular-introduction/.vscode/tasks.json (938 bytes)
CREATE angular-introduction/src/main.ts (250 bytes)
CREATE angular-introduction/src/favicon.ico (948 bytes)
CREATE angular-introduction/src/index.html (305 bytes)
CREATE angular-introduction/src/styles.css (80 bytes)
CREATE angular-introduction/src/app/app.component.css (0 bytes)
CREATE angular-introduction/src/app/app.component.html (23083 bytes)
CREATE angular-introduction/src/app/app.component.spec.ts (930 bytes)
CREATE angular-introduction/src/app/app.component.ts (319 bytes)
CREATE angular-introduction/src/app/app.config.ts (117 bytes)
CREATE angular-introduction/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```
