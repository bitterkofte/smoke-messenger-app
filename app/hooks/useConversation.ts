import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversaiton = () => {
  const params = useParams();
  const conversationId = useMemo(() => {
    if(!params?.useConversaitonId){
      return '';
    }
    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId])
  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
}

export default useConversaiton;