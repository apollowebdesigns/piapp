import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRoot from '../reducers/counter.reducer';
import * as fromActions from '../actions/counter.actions';

import { MyCounterComponent } from './my-counter.component';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.counterReducer,
        })
      ],
      declarations: [ MyCounterComponent ]
    })
    .compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment when an action has been called', () => {
    const action = new fromActions.Decrement();

    store.dispatch(action);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
