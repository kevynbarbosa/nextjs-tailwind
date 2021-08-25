import ShortcutButton from "./ShortchutButton";

export default function ShortcutMenu() {
  return (
    <>
      <div className="h-full">
        <ShortcutButton icon="notifications" label="Notificações" />
        <ShortcutButton icon="voice_chat" label="Canais" />
        <ShortcutButton icon="edit_note" label="Atividades" />
        <ShortcutButton icon="more_time" label="Controle de Ponto" />
        <ShortcutButton icon="hourglass_bottom" label="Banco de horas" />
        <ShortcutButton icon="supervised_user_circle" label="Equipes" />
        <ShortcutButton icon="lock" label="Permissões" />
        <ShortcutButton icon="settings" label="Ajustes" />
        <ShortcutButton icon="support_agent" label="Suporte" />
      </div>
    </>
  );
}
