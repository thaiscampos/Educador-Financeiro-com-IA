import { Divider } from '@/components/shared/Divider';
import { Goal, SquareArrowOutUpRight, Trash2 } from 'lucide-react';

interface CardProps {
  label: string;
  value: string;
  subtitle: string;
  variant?: 'default' | 'primary';
}

const variantClasses = {
  default: {
    card: 'bg-card',
    accent: 'text-primary',
    value: 'text-foreground',
    subtitle: 'text-muted-foreground',
    title: 'text-foreground',
    iconbg: 'bg-[#f1eeff]',
  },
  primary: {
    card: 'bg-primary',
    accent: 'text-primary-foreground',
    value: 'text-primary-foreground',
    subtitle: 'text-primary-foreground/70',
    title: 'text-primary-foreground',
    iconbg: 'bg-primary-foreground/10',
  },
};

export function CardHistory({
  icon: Icon,
  label,
  value,
  subtitle,
  variant = 'default',
}: CardProps) {
  const styles = variantClasses[variant];

  return (
    <div
      className={[
        'flex w-full items-center rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]',
        styles.card,
      ].join(' ')}
    >
      
      <div className="mr-10 shrink-0">
        <Goal
          className={[
            'h-12 w-12 rounded-md p-2',
            styles.iconbg,
            styles.accent,
          ].join(' ')}
        />
      </div>

      <div className="grid flex-1 grid-cols-5 items-center">
      
        <div>
          <h3 className={['font-semibold', styles.title].join(' ')}>
            Viagem para o Japão
          </h3>

          <span className={['text-sm', styles.subtitle].join(' ')}>
            13/08/2026
          </span>
        </div>

      
        <div>
          <span className={['text-sm', styles.subtitle].join(' ')}>
            Custo da Meta
          </span>

          <p className={['font-semibold', styles.title].join(' ')}>
            R$ 2.500,00
          </p>
        </div>

        <div>
          <span className={['text-sm', styles.subtitle].join(' ')}>
            Valor economizado
          </span>

          <p className={['font-semibold', styles.title].join(' ')}>
            R$ 2.500,00
          </p>
        </div>

        
        <div>
          <span className={['text-sm', styles.subtitle].join(' ')}>
            Economia mensal
          </span>

          <p className={['font-semibold', styles.title].join(' ')}>R$ 350,00</p>
        </div>

    
        <div className="flex h-12 items-center justify-end gap-3 border-l border-border pl-6">
          <button type="button" className="rounded-md p-2 hover:bg-red-100">
            <Trash2 className="h-6 w-6 text-red-600" />
          </button>

          <button
            type="button"
            className="border-border flex items-center gap-2 rounded-4xl border px-4 py-2 whitespace-nowrap"
          >
            <SquareArrowOutUpRight className="text-muted-foreground h-4 w-4" />
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
