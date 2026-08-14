

import { CardHistory } from "@/components/features/HistoryResults/CardHistory";
import { Divider } from "@/components/shared/Divider";
import { PageHero } from "@/components/shared/PageHero";
import { useSimulationStorage } from "@/hooks/useSimulationStorage";



export function HistoryPage() {
  const { getAllSimulations } = useSimulationStorage();

  const data = getAllSimulations();
   console.log(data);
  return ( 
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <PageHero
            title="Histórico de simulações"
            subtitle="Acompanhe todas as simulações realizadas e visualize os resultados de cada uma delas. "
          />
           <CardHistory
          
          label="Custo da Meta"
          value={'1000'}
          subtitle={'teste'}
        />
        <Divider  orientation="horizontal" />
       
      </main>
  );
}