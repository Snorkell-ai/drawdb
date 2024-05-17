import { MODAL } from "../data/constants";
import i18n from "../i18n/i18n";

/**
 * Returns the title for the given modal.
 * @param {string} modal - The modal type.
 * @returns {string} - The title for the modal.
 * @throws {Error} - If the modal type is not recognized.
 */
export const getModalTitle = (modal) => {
  switch (modal) {
    case MODAL.IMPORT:
    case MODAL.IMPORT_SRC:
      return i18n.t("import_diagram");
    case MODAL.CODE:
      return i18n.t("export_source");
    case MODAL.IMG:
      return i18n.t("export_image");
    case MODAL.RENAME:
      return i18n.t("rename_diagram");
    case MODAL.OPEN:
      return i18n.t("open_diagram");
    case MODAL.SAVEAS:
      return i18n.t("save_as");
    case MODAL.NEW:
      return i18n.t("create_new_diagram");
    case MODAL.TABLE_WIDTH:
      return i18n.t("table_width");
    case MODAL.LANGUAGE:
      return i18n.t("language");
    default:
      return "";
  }
};

/**
 * Returns the text for the given modal.
 * 
 * @param {string} modal - The modal type.
 * @returns {string} - The text for the modal.
 * @throws {Error} - If the modal type is not recognized.
 */
export const getOkText = (modal) => {
  switch (modal) {
    case MODAL.IMPORT:
    case MODAL.IMPORT_SRC:
      return i18n.t("import");
    case MODAL.CODE:
    case MODAL.IMG:
      return i18n.t("export");
    case MODAL.RENAME:
      return i18n.t("rename");
    case MODAL.OPEN:
      return i18n.t("open");
    case MODAL.SAVEAS:
      return i18n.t("save_as");
    case MODAL.NEW:
      return i18n.t("create");
    default:
      return i18n.t("confirm");
  }
};
