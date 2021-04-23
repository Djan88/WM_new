<?php

/* forumlist_body.html */
class __TwigTemplate_022e6a222c3e6255645e54ee373c1b06 extends Twig_Template
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
        echo "
";
        // line 2
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "forumrow"));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["forumrow"]) {
            // line 3
            echo "\t";
            if ((($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_CAT") && (!$this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_FIRST_ROW"))) || $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_NO_CAT"))) {
                // line 4
                echo "\t\t</div>
\t";
            }
            // line 6
            echo "
\t";
            // line 7
            // line 8
            echo "\t";
            if ((($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_CAT") || $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_FIRST_ROW")) || $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_NO_CAT"))) {
                // line 9
                echo "\t\t<div class=\"panel panel-default\">
\t\t<div class=\"clearfix\">
\t\t\t<h4 class=\"col-md-7 col-sm-8 col-xs-12\">";
                // line 11
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_CAT")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_VIEWFORUM");
                    echo "\">";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_NAME");
                    echo "</a>";
                } else {
                    echo $this->env->getExtension('phpbb')->lang("FORUM");
                }
                echo "</h4>
\t\t\t<h5 class=\"col-md-1 visible-lg visible-md text-center\">";
                // line 12
                echo $this->env->getExtension('phpbb')->lang("TOPICS");
                echo "</h5>
\t\t\t<h5 class=\"col-md-1 visible-lg visible-md text-center\">";
                // line 13
                echo $this->env->getExtension('phpbb')->lang("POSTS");
                echo "</h5>
\t\t\t<h5 class=\"col-md-3 col-sm-4 hidden-xs\">";
                // line 14
                echo $this->env->getExtension('phpbb')->lang("LAST_POST");
                echo "</h5>
\t\t</div>
\t";
            }
            // line 17
            echo "\t";
            // line 18
            echo "
\t";
            // line 19
            if ((!$this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_CAT"))) {
                // line 20
                echo "\t\t";
                // line 21
                echo "\t\t<div class=\"clearfix icon ";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_IMG_STYLE");
                if (($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_ROW_COUNT") % 2 == 0)) {
                    echo " bg1";
                } else {
                    echo " bg2";
                }
                echo "\">
\t\t\t";
                // line 22
                // line 23
                echo "\t\t\t<div class=\"folder col-md-7 col-sm-8 col-xs-12\"";
                if ((!$this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_LINK"))) {
                    echo " title=\"";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_FOLDER_IMG_ALT");
                    echo "\"";
                }
                echo ">
\t\t\t";
                // line 24
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_UNREAD_FORUM")) {
                    echo "<a href=\"";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_VIEWFORUM");
                    echo "\" class=\"icon-link\"></a>";
                }
                // line 25
                echo "\t\t\t\t";
                if (((isset($context["S_ENABLE_FEEDS"]) ? $context["S_ENABLE_FEEDS"] : null) && $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_FEED_ENABLED"))) {
                    echo "<!-- <a class=\"pull-";
                    echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                    echo "\" title=\"";
                    echo $this->env->getExtension('phpbb')->lang("FEED");
                    echo " - ";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_NAME");
                    echo "\" href=\"";
                    echo (isset($context["U_FEED"]) ? $context["U_FEED"] : null);
                    echo "?f=";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_ID");
                    echo "\"><i class=\"fa fa-rss\"></i></a> -->";
                }
                // line 26
                echo "            
\t\t\t\t";
                // line 27
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_IMAGE")) {
                    echo "<span class=\"forum-image pull-";
                    echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                    echo "\">";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_IMAGE");
                    echo "</span>";
                }
                // line 28
                echo "\t\t\t\t<a href=\"";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_VIEWFORUM");
                echo "\" class=\"forumtitle\">";
                echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_NAME");
                echo "</a>
\t\t\t\t";
                // line 29
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_DESC")) {
                    echo "<br />";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "FORUM_DESC");
                }
                // line 30
                echo "\t\t\t\t";
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "MODERATORS")) {
                    // line 31
                    echo "\t\t\t\t\t<br /><strong>";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "L_MODERATOR_STR");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</strong> ";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "MODERATORS");
                    echo "
\t\t\t\t";
                }
                // line 33
                echo "\t\t\t\t";
                if ((twig_length_filter($this->env, $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "subforum")) && $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_LIST_SUBFORUMS"))) {
                    // line 34
                    echo "\t\t\t\t\t";
                    // line 35
                    echo "\t\t\t\t\t<br /><strong>";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "L_SUBFORUM_STR");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo "</strong>
\t\t\t\t\t";
                    // line 36
                    $context['_parent'] = (array) $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "subforum"));
                    foreach ($context['_seq'] as $context["_key"] => $context["subforum"]) {
                        // line 37
                        echo "\t\t\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["subforum"]) ? $context["subforum"] : null), "U_SUBFORUM");
                        echo "\" title=\"";
                        if ($this->getAttribute((isset($context["subforum"]) ? $context["subforum"] : null), "UNREAD")) {
                            echo $this->env->getExtension('phpbb')->lang("UNREAD_POSTS");
                        } else {
                            echo $this->env->getExtension('phpbb')->lang("NO_UNREAD_POSTS");
                        }
                        echo "\"><i class=\"fa";
                        if ($this->getAttribute((isset($context["subforum"]) ? $context["subforum"] : null), "S_UNREAD")) {
                            echo " fa-comment";
                        } else {
                            echo " fa-comment-o";
                        }
                        echo "\"></i> ";
                        echo $this->getAttribute((isset($context["subforum"]) ? $context["subforum"] : null), "SUBFORUM_NAME");
                        echo "</a>";
                        if ((!$this->getAttribute((isset($context["subforum"]) ? $context["subforum"] : null), "S_LAST_ROW"))) {
                            echo $this->env->getExtension('phpbb')->lang("COMMA_SEPARATOR");
                        }
                        // line 38
                        echo "\t\t\t\t\t";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['subforum'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 39
                    echo "\t\t\t\t\t";
                    // line 40
                    echo "\t\t\t\t";
                }
                // line 41
                echo "
\t\t\t\t";
                // line 42
                if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                    // line 43
                    echo "\t\t\t\t<div class=\"visible-xs\">
\t\t\t\t\t";
                    // line 44
                    if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "CLICKS")) {
                        // line 45
                        echo "\t\t\t\t\t\t";
                        echo $this->env->getExtension('phpbb')->lang("REDIRECTS");
                        echo $this->env->getExtension('phpbb')->lang("COLON");
                        echo " <strong>";
                        echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "CLICKS");
                        echo "</strong>
\t\t\t\t\t";
                    } elseif (((!$this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_LINK")) && $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "TOPICS"))) {
                        // line 47
                        echo "\t\t\t\t\t\t";
                        echo $this->env->getExtension('phpbb')->lang("TOPICS");
                        echo $this->env->getExtension('phpbb')->lang("COLON");
                        echo " <strong>";
                        echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "TOPICS");
                        echo "</strong>
\t\t\t\t\t";
                    }
                    // line 49
                    echo "\t\t\t\t</div>
\t\t\t\t";
                }
                // line 51
                echo "\t\t\t</div>

\t\t\t";
                // line 53
                if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "CLICKS")) {
                    // line 54
                    echo "\t\t\t\t<div class=\"redirect col-md-5 col-sm-4 hidden-xs\">";
                    echo $this->env->getExtension('phpbb')->lang("REDIRECTS");
                    echo $this->env->getExtension('phpbb')->lang("COLON");
                    echo " ";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "CLICKS");
                    echo "</div>
\t\t\t";
                } elseif ((!$this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_IS_LINK"))) {
                    // line 56
                    echo "\t\t\t\t<div class=\"col-md-1 visible-lg visible-md text-center\">";
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "TOPICS");
                    echo "</div>
\t\t\t\t<div class=\"col-md-1 visible-lg visible-md text-center\">";
                    // line 57
                    echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "POSTS");
                    echo "</div>
\t\t\t\t<div class=\"col-md-3 col-sm-4 hidden-xs\">
\t\t\t\t\t";
                    // line 59
                    if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_UNAPPROVED_TOPICS")) {
                        // line 60
                        echo "\t\t\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_UNAPPROVED_TOPICS");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("TOPICS_UNAPPROVED");
                        echo "\"><i class=\"fa fa-flag\"></i></a>
\t\t\t\t\t";
                    } elseif ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_UNAPPROVED_POSTS")) {
                        // line 62
                        echo "\t\t\t\t\t\t<a href=\"";
                        echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_UNAPPROVED_POSTS");
                        echo "\" title=\"";
                        echo $this->env->getExtension('phpbb')->lang("POSTS_UNAPPROVED");
                        echo "\"><i class=\"fa fa-flag\"></i></a>
\t\t\t\t\t";
                    }
                    // line 64
                    echo "\t\t\t\t\t";
                    if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_TIME")) {
                        // line 65
                        echo "\t\t\t\t\t";
                        if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_DISPLAY_SUBJECT")) {
                            // line 66
                            echo "\t\t\t\t\t\t";
                            // line 67
                            echo "\t\t\t\t\t\t<a href=\"";
                            echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_LAST_POST");
                            echo "\" title=\"";
                            echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_SUBJECT");
                            echo "\" class=\"lastsubject\">";
                            echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_SUBJECT_TRUNCATED");
                            echo "</a> <br />
\t\t\t\t\t";
                        }
                        // line 68
                        echo " 
\t\t\t\t\t";
                        // line 69
                        echo $this->env->getExtension('phpbb')->lang("POST_BY_AUTHOR");
                        echo " ";
                        echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POSTER_FULL");
                        echo "
\t\t\t\t\t";
                        // line 70
                        if ((!(isset($context["S_IS_BOT"]) ? $context["S_IS_BOT"] : null))) {
                            echo "<a href=\"";
                            echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "U_LAST_POST");
                            echo "\" title=\"";
                            echo $this->env->getExtension('phpbb')->lang("VIEW_LATEST_POST");
                            echo "\"><i class=\"fa fa-arrow-";
                            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                            echo "\"></i></a> ";
                        }
                        echo "<br />";
                        echo $this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "LAST_POST_TIME");
                    } else {
                        echo $this->env->getExtension('phpbb')->lang("NO_POSTS");
                        echo "
\t\t\t\t\t";
                    }
                    // line 72
                    echo "\t\t\t\t</div>
\t\t\t";
                }
                // line 74
                echo "
\t\t\t";
                // line 75
                // line 76
                echo "\t\t</div>
\t\t";
                // line 77
                // line 78
                echo "\t";
            }
            // line 79
            echo "
\t";
            // line 80
            if ($this->getAttribute((isset($context["forumrow"]) ? $context["forumrow"] : null), "S_LAST_ROW")) {
                // line 81
                echo "\t\t</div>
\t";
                // line 82
                // line 83
                echo "\t";
            }
            // line 84
            echo "
";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 86
            echo "\t<div class=\"panel\">
\t\t<div class=\"inner\">
\t\t<strong>";
            // line 88
            echo $this->env->getExtension('phpbb')->lang("NO_FORUMS");
            echo "</strong>
\t\t</div>
\t</div>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['forumrow'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "forumlist_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  359 => 88,  355 => 86,  349 => 84,  346 => 83,  345 => 82,  342 => 81,  340 => 80,  337 => 79,  334 => 78,  333 => 77,  330 => 76,  329 => 75,  326 => 74,  322 => 72,  305 => 70,  299 => 69,  296 => 68,  286 => 67,  284 => 66,  281 => 65,  278 => 64,  270 => 62,  262 => 60,  260 => 59,  255 => 57,  250 => 56,  241 => 54,  231 => 49,  222 => 47,  213 => 45,  208 => 43,  206 => 42,  203 => 41,  200 => 40,  198 => 39,  192 => 38,  171 => 37,  167 => 36,  161 => 35,  159 => 34,  147 => 31,  144 => 30,  139 => 29,  132 => 28,  124 => 27,  121 => 26,  100 => 24,  91 => 23,  90 => 22,  78 => 20,  76 => 19,  73 => 18,  65 => 14,  61 => 13,  57 => 12,  45 => 11,  41 => 9,  38 => 8,  37 => 7,  34 => 6,  30 => 4,  27 => 3,  22 => 2,  242 => 66,  239 => 53,  238 => 64,  235 => 51,  230 => 60,  229 => 59,  218 => 58,  217 => 57,  211 => 44,  207 => 52,  205 => 51,  202 => 50,  197 => 47,  195 => 46,  169 => 45,  168 => 44,  162 => 41,  158 => 39,  156 => 33,  153 => 37,  148 => 34,  146 => 33,  138 => 32,  127 => 31,  126 => 30,  112 => 27,  108 => 25,  106 => 25,  103 => 23,  102 => 22,  99 => 21,  98 => 20,  95 => 19,  83 => 18,  80 => 21,  79 => 16,  71 => 17,  66 => 12,  64 => 11,  63 => 10,  59 => 8,  51 => 6,  49 => 5,  35 => 4,  31 => 2,  19 => 1,);
    }
}
