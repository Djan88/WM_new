<?php

/* posting_editor.html */
class __TwigTemplate_a3d36a2a6c6a15dbc2807e2236f4c1c2 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<fieldset class=\"form-horizontal\">
";
        // line 2
        if ((isset($context["ERROR"]) ? $context["ERROR"] : null)) {
            // line 3
            echo "\t<div class=\"alert alert-danger\">";
            echo (isset($context["ERROR"]) ? $context["ERROR"] : null);
            echo "</div>
";
        }
        // line 5
        echo "
\t";
        // line 6
        if (((isset($context["S_SHOW_TOPIC_ICONS"]) ? $context["S_SHOW_TOPIC_ICONS"] : null) || (isset($context["S_SHOW_PM_ICONS"]) ? $context["S_SHOW_PM_ICONS"] : null))) {
            // line 7
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"icon\">";
            // line 8
            echo $this->env->getExtension('phpbb')->lang("ICON");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">
\t\t\t\t<label for=\"icon\" class=\"btn btn-default active\"><input type=\"radio\" name=\"icon\" id=\"icon\" value=\"0\" checked=\"checked\" tabindex=\"1\" /> ";
            // line 11
            if ((isset($context["S_SHOW_TOPIC_ICONS"]) ? $context["S_SHOW_TOPIC_ICONS"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("NO_TOPIC_ICON");
            } else {
                echo $this->env->getExtension('phpbb')->lang("NO_PM_ICON");
            }
            echo "</label>
\t\t\t\t";
            // line 12
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topic_icon"));
            foreach ($context['_seq'] as $context["_key"] => $context["topic_icon"]) {
                echo "<label for=\"icon-";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_ID");
                echo "\" class=\"btn btn-default\"><input type=\"radio\" name=\"icon\" id=\"icon-";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_ID");
                echo "\" value=\"";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_ID");
                echo "\" ";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "S_ICON_CHECKED");
                echo " tabindex=\"1\" /><img src=\"";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_IMG");
                echo "\" width=\"";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_WIDTH");
                echo "\" height=\"";
                echo $this->getAttribute((isset($context["topic_icon"]) ? $context["topic_icon"] : null), "ICON_HEIGHT");
                echo "\" alt=\"\" title=\"\" /></label> ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topic_icon'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 13
            echo "\t\t\t</div>
\t\t</dd>
\t</dl>
\t";
        }
        // line 17
        echo "
\t";
        // line 18
        if (((!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null)) && (isset($context["S_DISPLAY_USERNAME"]) ? $context["S_DISPLAY_USERNAME"] : null))) {
            // line 19
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"username\">";
            // line 20
            echo $this->env->getExtension('phpbb')->lang("USERNAME");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" tabindex=\"1\" name=\"username\" id=\"username\" size=\"25\" value=\"";
            // line 21
            echo (isset($context["USERNAME"]) ? $context["USERNAME"] : null);
            echo "\" class=\"inputbox autowidth\" /></dd>
\t</dl>
\t";
        }
        // line 24
        echo "
\t";
        // line 25
        // line 26
        echo "
\t";
        // line 27
        if ((((isset($context["S_POST_ACTION"]) ? $context["S_POST_ACTION"] : null) || (isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null)) || (isset($context["S_EDIT_DRAFT"]) ? $context["S_EDIT_DRAFT"] : null))) {
            // line 28
            echo "\t<dl class=\"form-group\">
\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"subject\">";
            // line 29
            echo $this->env->getExtension('phpbb')->lang("SUBJECT");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label></dt>
\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" name=\"subject\" id=\"subject\" size=\"45\" maxlength=\"";
            // line 30
            if ((isset($context["S_NEW_MESSAGE"]) ? $context["S_NEW_MESSAGE"] : null)) {
                echo "120";
            } else {
                echo "124";
            }
            echo "\" tabindex=\"2\" value=\"";
            echo (isset($context["SUBJECT"]) ? $context["SUBJECT"] : null);
            echo (isset($context["DRAFT_SUBJECT"]) ? $context["DRAFT_SUBJECT"] : null);
            echo "\" class=\"inputbox autowidth\" /></dd>
\t</dl>
\t";
            // line 32
            if (((isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null) && (isset($context["S_CONFIRM_CODE"]) ? $context["S_CONFIRM_CODE"] : null))) {
                // line 33
                echo "\t\t";
                $value = 3;
                $context['definition']->set('CAPTCHA_TAB_INDEX', $value);
                // line 34
                echo "\t\t";
                $location = (("" . (isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) . "");
                $namespace = false;
                if (strpos($location, '@') === 0) {
                    $namespace = substr($location, 1, strpos($location, '/') - 1);
                    $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                    $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
                }
                $template = $this->env->resolveTemplate((("" . (isset($context["CAPTCHA_TEMPLATE"]) ? $context["CAPTCHA_TEMPLATE"] : null)) . ""));
                $template->display($context);
                if ($namespace) {
                    $this->env->setNamespaceLookUpOrder($previous_look_up_order);
                }
                // line 35
                echo "\t";
            }
            // line 36
            echo "\t";
        }
        // line 37
        echo "
\t";
        // line 38
        // line 39
        echo "
\t";
        // line 40
        $location = "posting_buttons.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("posting_buttons.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 41
        echo "
\t";
        // line 42
        // line 43
        echo "
\t<div id=\"message-box\">
\t\t<textarea ";
        // line 45
        if ((((isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null) && (!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null))) && (!(isset($context["S_EDIT_DRAFT"]) ? $context["S_EDIT_DRAFT"] : null)))) {
            echo "name=\"signature\" id=\"signature\" style=\"height: 9em;\"";
        } else {
            echo "name=\"message\" id=\"message\"";
        }
        echo " rows=\"15\" cols=\"76\" tabindex=\"4\" onselect=\"storeCaret(this);\" onclick=\"storeCaret(this);\" onkeyup=\"storeCaret(this);\" onfocus=\"initInsertions();\" class=\"form-control\">";
        echo (isset($context["MESSAGE"]) ? $context["MESSAGE"] : null);
        echo (isset($context["DRAFT_MESSAGE"]) ? $context["DRAFT_MESSAGE"] : null);
        echo (isset($context["SIGNATURE"]) ? $context["SIGNATURE"] : null);
        echo "</textarea>
\t</div>

\t";
        // line 48
        if (((isset($context["S_SMILIES_ALLOWED"]) ? $context["S_SMILIES_ALLOWED"] : null) && twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "smiley")))) {
            // line 49
            echo "\t<div id=\"smiley-box\" class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\">";
            // line 51
            echo $this->env->getExtension('phpbb')->lang("SMILIES");
            echo ":</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t";
            // line 53
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "smiley"));
            foreach ($context['_seq'] as $context["_key"] => $context["smiley"]) {
                // line 54
                echo "\t\t\t\t<a href=\"#\" onclick=\"insert_text('";
                echo $this->getAttribute((isset($context["smiley"]) ? $context["smiley"] : null), "A_SMILEY_CODE");
                echo "', true); return false;\"><img src=\"";
                echo $this->getAttribute((isset($context["smiley"]) ? $context["smiley"] : null), "SMILEY_IMG");
                echo "\" width=\"";
                echo $this->getAttribute((isset($context["smiley"]) ? $context["smiley"] : null), "SMILEY_WIDTH");
                echo "\" height=\"";
                echo $this->getAttribute((isset($context["smiley"]) ? $context["smiley"] : null), "SMILEY_HEIGHT");
                echo "\" alt=\"";
                echo $this->getAttribute((isset($context["smiley"]) ? $context["smiley"] : null), "SMILEY_CODE");
                echo "\" title=\"";
                echo $this->getAttribute((isset($context["smiley"]) ? $context["smiley"] : null), "SMILEY_DESC");
                echo "\" /></a>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['smiley'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 56
            echo "\t\t\t</dd>
\t\t</dl>
\t</div>
\t";
        }
        // line 60
        echo "
\t<div class=\"form-horizontal\">
\t\t<dl class=\"form-group\">
\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12 hidden-xs\">&nbsp;</dt>
\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t";
        // line 65
        if ((isset($context["BBCODE_STATUS"]) ? $context["BBCODE_STATUS"] : null)) {
            echo (isset($context["BBCODE_STATUS"]) ? $context["BBCODE_STATUS"] : null);
            echo " &nbsp; ";
        }
        // line 66
        echo "\t\t\t";
        if ((isset($context["S_BBCODE_ALLOWED"]) ? $context["S_BBCODE_ALLOWED"] : null)) {
            echo (isset($context["IMG_STATUS"]) ? $context["IMG_STATUS"] : null);
            echo " &nbsp; ";
            echo (isset($context["FLASH_STATUS"]) ? $context["FLASH_STATUS"] : null);
            echo " &nbsp; ";
            echo (isset($context["URL_STATUS"]) ? $context["URL_STATUS"] : null);
            echo " &nbsp; ";
        }
        echo (isset($context["SMILIES_STATUS"]) ? $context["SMILIES_STATUS"] : null);
        echo "
\t\t\t";
        // line 67
        if (((isset($context["S_SHOW_SMILEY_LINK"]) ? $context["S_SHOW_SMILEY_LINK"] : null) && (isset($context["S_SMILIES_ALLOWED"]) ? $context["S_SMILIES_ALLOWED"] : null))) {
            echo " &nbsp; <a href=\"";
            echo (isset($context["U_MORE_SMILIES"]) ? $context["U_MORE_SMILIES"] : null);
            echo "\" onclick=\"popup(this.href, 300, 350, '_phpbbsmilies'); return false;\">";
            echo $this->env->getExtension('phpbb')->lang("MORE_SMILIES");
            echo "</a>";
        }
        // line 68
        echo "\t\t\t";
        if ((isset($context["S_DISPLAY_REVIEW"]) ? $context["S_DISPLAY_REVIEW"] : null)) {
            echo " &nbsp; <a href=\"#review\">";
            echo $this->env->getExtension('phpbb')->lang("TOPIC_REVIEW");
            echo "</a>";
        }
        // line 69
        echo "\t\t\t";
        if (((isset($context["S_EDIT_DRAFT"]) ? $context["S_EDIT_DRAFT"] : null) || (isset($context["S_DISPLAY_REVIEW"]) ? $context["S_DISPLAY_REVIEW"] : null))) {
            // line 70
            echo "\t\t\t";
            if ((isset($context["S_EDIT_DRAFT"]) ? $context["S_EDIT_DRAFT"] : null)) {
                echo " &nbsp; <a href=\"";
                echo (isset($context["S_UCP_ACTION"]) ? $context["S_UCP_ACTION"] : null);
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("BACK_TO_DRAFTS");
                echo "</a>";
            }
            // line 71
            echo "\t\t\t";
        }
        // line 72
        echo "\t\t\t</dd>
\t\t</dl>
\t</div>

\t";
        // line 76
        // line 77
        echo "\t</fieldset>

";
        // line 79
        if (($this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "EXTRA_POSTING_OPTIONS") == 1)) {
            // line 80
            echo "
\t";
            // line 81
            if ((!(isset($context["S_SHOW_DRAFTS"]) ? $context["S_SHOW_DRAFTS"] : null))) {
                // line 82
                echo "\t\t</div>

\t\t";
                // line 84
                if (((!(isset($context["S_SHOW_DRAFTS"]) ? $context["S_SHOW_DRAFTS"] : null)) && ((!$this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SIG_EDIT")) == 1))) {
                    // line 85
                    echo "\t\t<fieldset class=\"";
                    if ((!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null))) {
                        echo "panel-footer ";
                    }
                    echo "text-center\">
\t\t\t";
                    // line 86
                    echo (isset($context["S_HIDDEN_ADDRESS_FIELD"]) ? $context["S_HIDDEN_ADDRESS_FIELD"] : null);
                    echo "
\t\t\t";
                    // line 87
                    echo (isset($context["S_HIDDEN_FIELDS"]) ? $context["S_HIDDEN_FIELDS"] : null);
                    echo "
\t\t\t";
                    // line 88
                    if ((isset($context["S_HAS_DRAFTS"]) ? $context["S_HAS_DRAFTS"] : null)) {
                        echo "<input type=\"submit\" accesskey=\"d\" tabindex=\"8\" name=\"load\" value=\"";
                        echo $this->env->getExtension('phpbb')->lang("LOAD_DRAFT");
                        echo "\" onclick=\"load_draft = true;\" class=\"btn btn-info\" />&nbsp; ";
                    }
                    // line 89
                    echo "\t\t\t";
                    if ((isset($context["S_SAVE_ALLOWED"]) ? $context["S_SAVE_ALLOWED"] : null)) {
                        echo "<input type=\"submit\" accesskey=\"k\" tabindex=\"7\" name=\"save\" value=\"";
                        echo $this->env->getExtension('phpbb')->lang("SAVE_DRAFT");
                        echo "\" class=\"btn btn-info\" />&nbsp; ";
                    }
                    // line 90
                    echo "\t\t\t<input type=\"submit\" tabindex=\"5\" name=\"preview\" value=\"";
                    echo $this->env->getExtension('phpbb')->lang("PREVIEW");
                    echo "\"";
                    if ((!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null))) {
                        echo " onclick=\"document.getElementById('postform').action += '#preview';\"";
                    }
                    echo " class=\"btn btn-primary\" />&nbsp;
\t\t\t<input type=\"submit\" accesskey=\"s\" tabindex=\"6\" name=\"post\" value=\"";
                    // line 91
                    echo $this->env->getExtension('phpbb')->lang("SUBMIT");
                    echo "\" class=\"btn btn-success\" />&nbsp;

\t\t</fieldset>
\t\t";
                }
                // line 95
                echo "
\t</div>
\t";
            }
            // line 98
            echo "
\t";
            // line 99
            if ((((!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null)) && (!(isset($context["S_SHOW_DRAFTS"]) ? $context["S_SHOW_DRAFTS"] : null))) && ((!$this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SIG_EDIT")) == 1))) {
                // line 100
                echo "\t\t<div id=\"nav-tabs\" class=\"sub-panels\" data-show-panel=\"";
                if ((isset($context["SHOW_PANEL"]) ? $context["SHOW_PANEL"] : null)) {
                    echo (isset($context["SHOW_PANEL"]) ? $context["SHOW_PANEL"] : null);
                } else {
                    echo "options-panel";
                }
                echo "\" role=\"tablist\">
\t\t\t<ul class=\"nav nav-pills\">
\t\t\t\t<li id=\"options-panel-tab\" class=\"activetab active\"><a href=\"#nav-tabs\" data-subpanel=\"options-panel\" role=\"tab\" aria-controls=\"options-panel\">";
                // line 102
                echo $this->env->getExtension('phpbb')->lang("OPTIONS");
                echo "</a></li>
\t\t\t\t";
                // line 103
                if ((isset($context["S_SHOW_ATTACH_BOX"]) ? $context["S_SHOW_ATTACH_BOX"] : null)) {
                    // line 104
                    echo "\t\t\t\t\t<li id=\"attach-panel-tab\">
\t\t\t\t\t\t<a href=\"#tabs\" data-subpanel=\"attach-panel\" role=\"tab\" aria-controls=\"attach-panel\">
\t\t\t\t\t\t\t";
                    // line 106
                    echo $this->env->getExtension('phpbb')->lang("ATTACHMENTS");
                    echo " <strong id=\"file-total-progress\"><strong id=\"file-total-progress-bar\"></strong></strong>
\t\t\t\t\t\t</a>
\t\t\t\t\t</li>
\t\t\t\t";
                }
                // line 110
                echo "\t\t\t\t";
                if (((isset($context["S_SHOW_POLL_BOX"]) ? $context["S_SHOW_POLL_BOX"] : null) || (isset($context["S_POLL_DELETE"]) ? $context["S_POLL_DELETE"] : null))) {
                    // line 111
                    echo "\t\t\t\t\t<li id=\"poll-panel-tab\">
\t\t\t\t\t\t<a href=\"#tabs\" data-subpanel=\"poll-panel\" role=\"tab\" aria-controls=\"poll-panel\">";
                    // line 112
                    echo $this->env->getExtension('phpbb')->lang("ADD_POLL");
                    echo "</a>
\t\t\t\t\t</li>
\t\t\t\t";
                }
                // line 115
                echo "\t\t\t</ul>
\t\t</div>
\t";
            }
            // line 118
            echo "
\t";
            // line 119
            if (((!(isset($context["S_SHOW_DRAFTS"]) ? $context["S_SHOW_DRAFTS"] : null)) && ((!$this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "SIG_EDIT")) == 1))) {
                // line 120
                echo "\t<div id=\"options-panel\"";
                if ((!(isset($context["S_PRIVMSGS"]) ? $context["S_PRIVMSGS"] : null))) {
                    echo " class=\"panel panel-default\"";
                }
                echo ">
\t\t<div class=\"panel-body\">

\t\t<fieldset class=\"form-horizontal\">
\t\t\t";
                // line 124
                // line 125
                echo "\t\t\t";
                if ((isset($context["S_BBCODE_ALLOWED"]) ? $context["S_BBCODE_ALLOWED"] : null)) {
                    // line 126
                    echo "\t\t\t\t<div><label for=\"disable_bbcode\"><input type=\"checkbox\" name=\"disable_bbcode\" id=\"disable_bbcode\"";
                    echo (isset($context["S_BBCODE_CHECKED"]) ? $context["S_BBCODE_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("DISABLE_BBCODE");
                    echo "</label></div>
\t\t\t";
                }
                // line 128
                echo "\t\t\t";
                if ((isset($context["S_SMILIES_ALLOWED"]) ? $context["S_SMILIES_ALLOWED"] : null)) {
                    // line 129
                    echo "\t\t\t\t<div><label for=\"disable_smilies\"><input type=\"checkbox\" name=\"disable_smilies\" id=\"disable_smilies\"";
                    echo (isset($context["S_SMILIES_CHECKED"]) ? $context["S_SMILIES_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("DISABLE_SMILIES");
                    echo "</label></div>
\t\t\t";
                }
                // line 131
                echo "\t\t\t";
                if ((isset($context["S_LINKS_ALLOWED"]) ? $context["S_LINKS_ALLOWED"] : null)) {
                    // line 132
                    echo "\t\t\t\t<div><label for=\"disable_magic_url\"><input type=\"checkbox\" name=\"disable_magic_url\" id=\"disable_magic_url\"";
                    echo (isset($context["S_MAGIC_URL_CHECKED"]) ? $context["S_MAGIC_URL_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("DISABLE_MAGIC_URL");
                    echo "</label></div>
\t\t\t";
                }
                // line 134
                echo "\t\t\t";
                if ((isset($context["S_SIG_ALLOWED"]) ? $context["S_SIG_ALLOWED"] : null)) {
                    // line 135
                    echo "\t\t\t\t<div><label for=\"attach_sig\"><input type=\"checkbox\" name=\"attach_sig\" id=\"attach_sig\"";
                    echo (isset($context["S_SIGNATURE_CHECKED"]) ? $context["S_SIGNATURE_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("ATTACH_SIG");
                    echo "</label></div>
\t\t\t";
                }
                // line 137
                echo "\t\t\t";
                if ((isset($context["S_NOTIFY_ALLOWED"]) ? $context["S_NOTIFY_ALLOWED"] : null)) {
                    // line 138
                    echo "\t\t\t\t<div><label for=\"notify\"><input type=\"checkbox\" name=\"notify\" id=\"notify\"";
                    echo (isset($context["S_NOTIFY_CHECKED"]) ? $context["S_NOTIFY_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("NOTIFY_REPLY");
                    echo "</label></div>
\t\t\t";
                }
                // line 140
                echo "\t\t\t";
                if ((isset($context["S_LOCK_TOPIC_ALLOWED"]) ? $context["S_LOCK_TOPIC_ALLOWED"] : null)) {
                    // line 141
                    echo "\t\t\t\t<div><label for=\"lock_topic\"><input type=\"checkbox\" name=\"lock_topic\" id=\"lock_topic\"";
                    echo (isset($context["S_LOCK_TOPIC_CHECKED"]) ? $context["S_LOCK_TOPIC_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("LOCK_TOPIC");
                    echo "</label></div>
\t\t\t";
                }
                // line 143
                echo "\t\t\t";
                if ((isset($context["S_LOCK_POST_ALLOWED"]) ? $context["S_LOCK_POST_ALLOWED"] : null)) {
                    // line 144
                    echo "\t\t\t\t<div><label for=\"lock_post\"><input type=\"checkbox\" name=\"lock_post\" id=\"lock_post\"";
                    echo (isset($context["S_LOCK_POST_CHECKED"]) ? $context["S_LOCK_POST_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("LOCK_POST");
                    echo " [";
                    echo $this->env->getExtension('phpbb')->lang("LOCK_POST_EXPLAIN");
                    echo "]</label></div>
\t\t\t";
                }
                // line 146
                echo "
\t\t\t";
                // line 147
                if ((((isset($context["S_TYPE_TOGGLE"]) ? $context["S_TYPE_TOGGLE"] : null) || (isset($context["S_TOPIC_TYPE_ANNOUNCE"]) ? $context["S_TOPIC_TYPE_ANNOUNCE"] : null)) || (isset($context["S_TOPIC_TYPE_STICKY"]) ? $context["S_TOPIC_TYPE_STICKY"] : null))) {
                    // line 148
                    echo "\t\t\t<hr />
\t\t\t";
                }
                // line 150
                echo "
\t\t\t";
                // line 151
                if ((isset($context["S_TYPE_TOGGLE"]) ? $context["S_TYPE_TOGGLE"] : null)) {
                    // line 152
                    echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"topic_type-0\">";
                    // line 153
                    if ((isset($context["S_EDIT_POST"]) ? $context["S_EDIT_POST"] : null)) {
                        echo $this->env->getExtension('phpbb')->lang("CHANGE_TOPIC_TO");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("POST_TOPIC_AS");
                    }
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">
\t\t\t\t\t\t";
                    // line 156
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "topic_type"));
                    foreach ($context['_seq'] as $context["_key"] => $context["topic_type"]) {
                        echo "<label for=\"topic_type-";
                        echo $this->getAttribute((isset($context["topic_type"]) ? $context["topic_type"] : null), "VALUE");
                        echo "\" class=\"btn btn-default";
                        if ($this->getAttribute((isset($context["topic_type"]) ? $context["topic_type"] : null), "S_FIRST_ROW")) {
                            echo " active";
                        }
                        echo "\"><input type=\"radio\" name=\"topic_type\" id=\"topic_type-";
                        echo $this->getAttribute((isset($context["topic_type"]) ? $context["topic_type"] : null), "VALUE");
                        echo "\" value=\"";
                        echo $this->getAttribute((isset($context["topic_type"]) ? $context["topic_type"] : null), "VALUE");
                        echo "\"";
                        echo $this->getAttribute((isset($context["topic_type"]) ? $context["topic_type"] : null), "S_CHECKED");
                        echo " />";
                        echo $this->getAttribute((isset($context["topic_type"]) ? $context["topic_type"] : null), "L_TOPIC_TYPE");
                        echo "</label> ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['topic_type'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 157
                    echo "\t\t\t\t\t</div>
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                }
                // line 161
                echo "
\t\t\t";
                // line 162
                if (((isset($context["S_TOPIC_TYPE_ANNOUNCE"]) ? $context["S_TOPIC_TYPE_ANNOUNCE"] : null) || (isset($context["S_TOPIC_TYPE_STICKY"]) ? $context["S_TOPIC_TYPE_STICKY"] : null))) {
                    // line 163
                    echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"topic_time_limit\">";
                    // line 164
                    echo $this->env->getExtension('phpbb')->lang("STICK_TOPIC_FOR");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\">
\t\t\t\t\t<input type=\"number\" min=\"0\" max=\"999\" name=\"topic_time_limit\" id=\"topic_time_limit\" size=\"3\" maxlength=\"3\" value=\"";
                    // line 166
                    echo (isset($context["TOPIC_TIME_LIMIT"]) ? $context["TOPIC_TIME_LIMIT"] : null);
                    echo "\" class=\"form-control\" /> ";
                    echo $this->env->getExtension('phpbb')->lang("DAYS");
                    echo "
\t\t\t\t\t<br /><span class=\"help-block\">";
                    // line 167
                    echo $this->env->getExtension('phpbb')->lang("STICK_TOPIC_FOR_EXPLAIN");
                    echo "</span>
\t\t\t\t</dd>
\t\t\t</dl>
\t\t\t";
                }
                // line 171
                echo "
\t\t\t";
                // line 172
                if (((isset($context["S_SOFTDELETE_ALLOWED"]) ? $context["S_SOFTDELETE_ALLOWED"] : null) || (isset($context["S_DELETE_ALLOWED"]) ? $context["S_DELETE_ALLOWED"] : null))) {
                    // line 173
                    echo "\t\t\t\t<hr />
\t\t\t\t<dl class=\"form-group\">
\t\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"delete\">";
                    // line 175
                    echo $this->env->getExtension('phpbb')->lang("DELETE_POST");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><label class=\"control-label\" for=\"delete\"><input type=\"checkbox\" name=\"delete\" id=\"delete\" ";
                    // line 176
                    echo (isset($context["S_SOFTDELETE_CHECKED"]) ? $context["S_SOFTDELETE_CHECKED"] : null);
                    echo " /> ";
                    echo $this->env->getExtension('phpbb')->lang("DELETE_POST_WARN");
                    echo "</label>
\t\t\t\t\t";
                    // line 177
                    if (((isset($context["S_DELETE_ALLOWED"]) ? $context["S_DELETE_ALLOWED"] : null) && (isset($context["S_SOFTDELETE_ALLOWED"]) ? $context["S_SOFTDELETE_ALLOWED"] : null))) {
                        // line 178
                        echo "\t\t\t\t\t<br /><label class=\"control-label\" for=\"delete_permanent\"><input type=\"checkbox\" name=\"delete_permanent\" id=\"delete_permanent\" /> ";
                        echo $this->env->getExtension('phpbb')->lang("DELETE_POST_PERMANENTLY");
                        echo "</label>>
\t\t\t\t\t";
                    }
                    // line 180
                    echo "\t\t\t\t\t</dd>
\t\t\t\t</dl>
\t\t\t";
                }
                // line 183
                echo "
\t\t\t";
                // line 184
                if ((isset($context["S_EDIT_REASON"]) ? $context["S_EDIT_REASON"] : null)) {
                    // line 185
                    echo "\t\t\t<dl class=\"form-group\">
\t\t\t\t<dt class=\"col-md-3 col-sm-4 col-xs-12\"><label class=\"control-label\" for=\"edit_reason\">";
                    // line 186
                    echo $this->env->getExtension('phpbb')->lang("EDIT_REASON");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</label></dt>
\t\t\t\t<dd class=\"col-md-9 col-sm-8 col-xs-12 form-inline\"><input type=\"text\" name=\"edit_reason\" id=\"edit_reason\" value=\"";
                    // line 187
                    echo (isset($context["EDIT_REASON"]) ? $context["EDIT_REASON"] : null);
                    echo "\" class=\"form-control autowidth\" /></dd>
\t\t\t</dl>
\t\t\t";
                }
                // line 190
                echo "\t\t</fieldset>
\t\t";
            }
            // line 192
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "posting_editor.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  649 => 192,  645 => 190,  639 => 187,  634 => 186,  631 => 185,  629 => 184,  626 => 183,  621 => 180,  615 => 178,  613 => 177,  607 => 176,  602 => 175,  598 => 173,  596 => 172,  593 => 171,  586 => 167,  580 => 166,  574 => 164,  571 => 163,  569 => 162,  566 => 161,  560 => 157,  537 => 156,  526 => 153,  523 => 152,  521 => 151,  518 => 150,  514 => 148,  512 => 147,  509 => 146,  499 => 144,  496 => 143,  488 => 141,  485 => 140,  477 => 138,  474 => 137,  466 => 135,  463 => 134,  455 => 132,  452 => 131,  444 => 129,  441 => 128,  433 => 126,  430 => 125,  429 => 124,  419 => 120,  417 => 119,  414 => 118,  409 => 115,  403 => 112,  400 => 111,  397 => 110,  390 => 106,  386 => 104,  384 => 103,  380 => 102,  370 => 100,  368 => 99,  365 => 98,  360 => 95,  353 => 91,  344 => 90,  337 => 89,  331 => 88,  327 => 87,  323 => 86,  316 => 85,  314 => 84,  310 => 82,  308 => 81,  305 => 80,  303 => 79,  299 => 77,  298 => 76,  292 => 72,  289 => 71,  280 => 70,  277 => 69,  270 => 68,  262 => 67,  249 => 66,  244 => 65,  237 => 60,  231 => 56,  212 => 54,  208 => 53,  203 => 51,  199 => 49,  197 => 48,  183 => 45,  179 => 43,  178 => 42,  175 => 41,  163 => 40,  160 => 39,  159 => 38,  156 => 37,  153 => 36,  150 => 35,  136 => 34,  132 => 33,  130 => 32,  113 => 29,  110 => 28,  108 => 27,  104 => 25,  95 => 21,  90 => 20,  87 => 19,  85 => 18,  82 => 17,  53 => 12,  45 => 11,  38 => 8,  35 => 7,  33 => 6,  30 => 5,  24 => 3,  22 => 2,  158 => 49,  148 => 41,  140 => 39,  137 => 38,  129 => 36,  126 => 35,  118 => 30,  116 => 32,  109 => 28,  105 => 26,  101 => 24,  97 => 25,  93 => 24,  89 => 22,  76 => 13,  73 => 20,  68 => 18,  65 => 17,  59 => 14,  55 => 13,  52 => 12,  50 => 11,  43 => 7,  34 => 3,  31 => 2,  19 => 1,);
    }
}
