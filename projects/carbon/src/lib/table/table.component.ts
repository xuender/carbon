import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PipesService } from '../pipes/pipes.service';
import { Result } from './result';

interface Button {
  icon?: string;
  num?: number;
  disabled?: boolean;
  offset: number;
}

interface Field {
  title?: string;
  size?: number;
  key: string;
}

@Component({
  selector: 'car-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input()
  size = 10;
  @Input()
  cols = '';
  @Output()
  turn: EventEmitter<number> = new EventEmitter();
  buttons: Button[] = [];
  start = 0;
  fields: Field[] = [];
  @Input()
  get data() {
    return this._res ? this._res : { limit: 10 };
  }

  private funcs = new Map<string, string[]>();
  private _res?: Result;
  constructor(private pipesServ: PipesService) {}

  to(offset: number) {
    this.turn.emit(offset);
  }

  value(item: any, key: string, index: number) {
    if (key == 'no.') {
      return index;
    }

    let val = item[key];

    const funcs = this.funcs.get(key);
    if (funcs) {
      for (const func of funcs) {
        val = this.pipesServ.transform(val, func);
      }
    }

    return val;
  }

  set data(data: Result) {
    this._res = data;

    if (this.cols) {
      const fields = this.cols.split(';');
      this.fields = [];

      for (const str of fields) {
        const keys = str.split(',');
        const field: Field = { key: '' };
        switch (keys.length) {
          default:
          case 3:
            field.size = keys[2] ? parseInt(keys[2], 10) : undefined;
          case 2:
            field.title = keys[1];
          case 1:
            const funcs = keys[0].split('|');
            field.key = funcs[0];

            if (funcs.length > 1) {
              this.funcs.set(funcs[0], funcs.slice(1));
            }
        }

        if (field.key) {
          this.fields.push(field);
        }
      }
    }

    if (!this._res) {
      return;
    }

    if (!this._res.count) {
      this._res.count = 0;
    }

    if (!this._res.offset) {
      this._res.offset = 0;
    }

    if (!this._res.limit) {
      this._res.limit = this.size;
    }

    if (!this._res.data) {
      this._res.data = [];
    }

    this.start = this._res.offset + this._res.data.length;
    if (this.start > this._res.count) {
      this.start = this._res.count;
    }

    for (let i = this._res.data.length; i < this._res.limit; i++) {
      this._res.data.push({});
    }

    let pages = Math.ceil(this._res.count / this._res.limit);
    const page = Math.floor(this._res.offset / this._res.limit);

    this.buttons = [
      { icon: 'play-skip-back', num: 1, offset: 0, disabled: page == 0 },
      {
        icon: 'chevron-back',
        offset: (page - 1) * this._res.limit,
        disabled: page == 0,
      },
      {
        icon: 'chevron-forward',
        offset: (page + 1) * this._res.limit,
        disabled: page >= pages - 1,
      },
      {
        icon: 'play-skip-forward',
        offset: (pages - 1) * this._res.limit,
        num: pages,
        disabled: page >= pages - 1,
      },
    ];

    if (pages) {
      let start = page - 2;
      let end = page + 3;

      if (start < 0) {
        end += 0 - start;
        if (end > pages) {
          end = pages;
        }

        start = 0;
      }

      if (end > pages) {
        start -= end - pages;
        if (start < 0) {
          start = 0;
        }

        end = pages;
      }

      for (let i = end - 1; i >= start; i--) {
        this.buttons.splice(2, 0, {
          num: i + 1,
          offset: i * this._res.limit,
          disabled: i == page,
        });
      }

      return;
    }

    this.buttons.splice(2, 0, {
      num: 1,
      offset: 0,
      disabled: true,
    });
  }
}
