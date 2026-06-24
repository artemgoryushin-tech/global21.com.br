import { BrokerageLeadForm } from "@/components/BrokerageLeadForm";

type BeBrokerCTAProps = {
  compact?: boolean;
  horizontal?: boolean;
  formId?: string;
  contextName?: string;
  contextSlug?: string;
  requestType?: string;
  title?: string;
  description?: string;
};

const leadCopy =
  "Se você quer capturar 100% da receita do seu tráfego e ser dono do próprio negócio, conheça as possibilidades de uma corretora white label. Envie seus dados e nossa equipe retorna com os próximos passos.";

export function BeBrokerCTA({
  compact = false,
  horizontal = false,
  formId,
  contextName = "AfiliadosPro Brasil white label",
  contextSlug = "afiliadospro-white-label",
  requestType = "white-label broker ownership",
  title = "Receba 100% da receita do seu tráfego",
  description = leadCopy
}: BeBrokerCTAProps) {
  return (
    <div className={horizontal ? "w-full" : compact ? "w-full max-w-xl" : "w-full"}>
      <BrokerageLeadForm
        formId={formId}
        compact={compact}
        layout={horizontal ? "wide" : compact ? "sidebar" : "standard"}
        contextName={contextName}
        contextSlug={contextSlug}
        requestType={requestType}
        title={title}
        description={description}
      />
    </div>
  );
}
