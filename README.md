# Εισαγωγή στo Angular Framework

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
