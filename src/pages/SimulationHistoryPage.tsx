import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardHistory } from '@/components/features/HistoryResults/CardHistory';
import { Divider } from '@/components/shared/Divider';
import { PageHero } from '@/components/shared/PageHero';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { calcMonthlySavings } from '@/utils/simulation';

export function HistoryPage() {
  const navigate = useNavigate();
  const { getAllSimulations, deleteSimulation } = useSimulationStorage();

  const [data, setData] = useState(getAllSimulations);

  const handleDelete = (id: string) => {
    deleteSimulation(id);
    setData((currentData) =>
      currentData.filter((simulation) => simulation.id !== id)
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de simulações"
        subtitle="Acompanhe todas as simulações realizadas e visualize os resultados de cada uma delas."
      />
      {data.length === 0 ? (
        <div className="border-border bg-card flex flex-col items-center justify-center rounded-2xl border px-6 py-10 text-center">
          <p className="text-foreground font-medium">
            Nenhuma simulação encontrada
          </p>

          <span className="text-muted-foreground mt-1 text-sm">
            Suas simulações realizadas aparecerão aqui.
          </span>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {data.map((simulation) => {
            const monthlySavings = calcMonthlySavings(simulation);

            return (
              <div key={simulation.id}>
                <CardHistory
                  onDetailsPage={() => {
                    // Navigate to the details page for this simulation
                    navigate(`/resultado/${simulation.id}`);
                  }}
                  onClick={() => handleDelete(simulation.id)}
                  title={simulation.goalName}
                  goalValueFormatted={`R$ ${simulation.goalAmount}`}
                  monthGoalFormatted={`${simulation.goalDeadline} meses`}
                  monthlySavedFormatted={`R$ ${monthlySavings.toLocaleString(
                    'pt-BR',
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}`}
                />

                <Divider orientation="horizontal" />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
