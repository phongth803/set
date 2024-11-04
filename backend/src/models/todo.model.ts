import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  todoID?: string;

  @property({
    type: 'string',
    required: true,
  })
  todoName: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isChecked: boolean;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
