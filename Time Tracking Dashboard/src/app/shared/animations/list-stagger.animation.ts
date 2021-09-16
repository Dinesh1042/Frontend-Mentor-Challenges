import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listStagger = () => {
  return trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(
            '200ms',
            animate(
              '1000ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          ),
        ],
        { optional: true }
      ),
      query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true,
      }),
    ]),
  ]);
};
