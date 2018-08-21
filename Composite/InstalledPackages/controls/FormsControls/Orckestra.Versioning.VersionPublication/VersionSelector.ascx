<%@ Control Language="C#" Inherits="Composite.Plugins.Forms.WebChannel.UiControlFactories.SelectorTemplateUserControlBase"  %>
<%@ Import Namespace="System.Linq" %>
<%@ Import Namespace="Composite.C1Console.Forms" %>

<script runat="server">

    public override void BindStateToProperties()
    {
        this.SelectedKeys = new List<string> {clientSelector.SelectedValue};
    }


    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);

        if (this.SelectedIndexChangedEventHandler != null)
        {
            clientSelector.SelectedIndexChanged += this.SelectedIndexChangedEventHandler;
            clientSelector.AutoPostBack = true;
        }
    }

    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        clientSelector.IsDisabled = ReadOnly;
    }


    public override void InitializeViewState()
    {
        List<KeyLabelPair> options = this.GetOptions();

        clientSelector.DataSource = options;
        clientSelector.DataTextField = "Label";
        clientSelector.DataValueField = "Key";
        clientSelector.DataBind();

        string key = this.SelectedKeys.FirstOrDefault();
        if (key != null && options.Any(f => f.Key == key))
        {
            clientSelector.SelectedValue = key;
        }
        else
        {
            clientSelector.SelectionRequired = this.Required;
        }
    }


    public override string GetDataFieldClientName()
    {
        return clientSelector.UniqueID;
    }
</script>

<script type="text/javascript" src="/Composite/InstalledPackages/controls/FormsControls/Orckestra.Versioning.VersionPublication/Bindings/EditorVersionSelectorBinding.js" ></script>
<formscontrol:styleloader adminrelativepath="InstalledPackages/controls/FormsControls/Orckestra.Versioning.VersionPublication/VersionSelector.css.aspx" runat="server" />
<aspui:Selector ID="clientSelector" runat="server" client_local="true" client_binding="EditorVersionSelectorBinding" client_popupclass="versionselector textonly" client_textonly="true" client_class="versionselector"/>

