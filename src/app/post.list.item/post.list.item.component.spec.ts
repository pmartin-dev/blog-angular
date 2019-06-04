import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.List.ItemComponent } from './post.list.item.component';

describe('Post.List.ItemComponent', () => {
  let component: Post.List.ItemComponent;
  let fixture: ComponentFixture<Post.List.ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post.List.ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.List.ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
