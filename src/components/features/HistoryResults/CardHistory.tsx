import {
  Goal,
  type LucideIcon,
  SquareArrowOutUpRight,
  Trash2,
} from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title?: string;
  monthlySavedFormatted?: string;
  monthGoalFormatted?: string;
  goalValueFormatted?: string;
  variant?: 'default' | 'primary';
  onClick?: () => void;
  onDetailsPage: () => void;
}

const variantClasses = {
  default: {
    card: 'bg-card',
    accent: 'text-primary',
    subtitle: 'text-muted-foreground',
    title: 'text-foreground',
    iconBg: 'bg-[#f1eeff]',
    hover: 'hover:bg-[#f1eeff]',
  },
  primary: {
    card: 'bg-primary',
    accent: 'text-primary-foreground',
    subtitle: 'text-primary-foreground/70',
    title: 'text-primary-foreground',
    iconBg: 'bg-primary-foreground/10',
    hover: 'hover:bg-primary-foreground/10',
  },
};

export function CardHistory({
  icon: Icon = Goal,
  goalValueFormatted,
  monthGoalFormatted,
  monthlySavedFormatted,
  title,
  onClick,
  onDetailsPage,
  variant = 'default',
}: CardProps) {
  const styles = variantClasses[variant];

  return (
    <article
      className={[
        'w-full rounded-2xl p-4 sm:p-5 lg:p-6',
        'shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]',
        styles.card,
      ].join(' ')}
    >
      <div className="grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
        <div className="flex min-w-0 items-center gap-3">
          <Icon
            className={[
              'h-11 w-11 shrink-0 rounded-md p-2',
              'sm:h-12 sm:w-12',
              styles.iconBg,
              styles.accent,
            ].join(' ')}
          />

          <div className="min-w-0">
            <h3
              className={['font-semibold wrap-break-word', styles.title].join(
                ' '
              )}
            >
              {title || 'Titulo da meta'}
            </h3>

            <span className={['text-sm', styles.subtitle].join(' ')}>
              24/08/2026
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <span className={['text-xs sm:text-sm', styles.subtitle].join(' ')}>
            Custo da meta
          </span>

          <p className={['font-semibold', styles.title].join(' ')}>
            {goalValueFormatted || 'R$ 6.300,00'}
          </p>
        </div>

        <div className="min-w-0">
          <span className={['text-xs sm:text-sm', styles.subtitle].join(' ')}>
            Prazo
          </span>

          <p className={['font-semibold', styles.title].join(' ')}>
            {monthGoalFormatted || '24 meses'}
          </p>
        </div>

        <div className="min-w-0">
          <span className={['text-xs sm:text-sm', styles.subtitle].join(' ')}>
            Economia mensal
          </span>

          <p className={['font-semibold', styles.title].join(' ')}>
            {monthlySavedFormatted || 'R$ 262,50'}
          </p>
        </div>

        <div className="border-border flex items-center gap-3 border-t pt-4 sm:col-span-2 lg:col-span-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-5">
          <button
            type="button"
            className={[
              'shrink-0 rounded-md p-2 transition-colors hover:cursor-pointer',
              styles.hover,
            ].join(' ')}
            aria-label="Excluir"
            onClick={onClick}
          >
            <Trash2 className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            className="border-border hover:bg-muted flex flex-1 items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm whitespace-nowrap transition-colors hover:cursor-pointer sm:px-4"
            onClick={onDetailsPage}
          >
            <SquareArrowOutUpRight className="text-muted-foreground h-4 w-4 shrink-0" />

            <span>Ver detalhes</span>
          </button>
        </div>
      </div>
    </article>
  );
}
