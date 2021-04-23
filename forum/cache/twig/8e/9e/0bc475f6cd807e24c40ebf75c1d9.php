<?php

/* memberlist_body.html */
class __TwigTemplate_8e9e0bc475f6cd807e24c40ebf75c1d9 extends Twig_Template
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
        if ((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null)) {
            // line 2
            echo "\t";
            $location = "simple_header.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("simple_header.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 3
            echo "\t";
            $location = "memberlist_search.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("memberlist_search.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 4
            echo "\t<form method=\"post\" id=\"results\" action=\"";
            echo (isset($context["S_MODE_ACTION"]) ? $context["S_MODE_ACTION"] : null);
            echo "\" onsubmit=\"insert_marked_users('#results', this.user); return false;\" data-form-name=\"";
            echo (isset($context["S_FORM_NAME"]) ? $context["S_FORM_NAME"] : null);
            echo "\" data-field-name=\"";
            echo (isset($context["S_FIELD_NAME"]) ? $context["S_FIELD_NAME"] : null);
            echo "\">

";
        } else {
            // line 7
            echo "\t";
            $location = "overall_header.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("overall_header.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 8
            echo "\t<div id=\"memberlist_search\"";
            if ((!(isset($context["S_SEARCH_USER"]) ? $context["S_SEARCH_USER"] : null))) {
                echo " style=\"display: none;\"";
            }
            echo ">
\t";
            // line 9
            $location = "memberlist_search.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("memberlist_search.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 10
            echo "\t</div>
\t<form method=\"post\" action=\"";
            // line 11
            echo (isset($context["S_MODE_ACTION"]) ? $context["S_MODE_ACTION"] : null);
            echo "\">

";
        }
        // line 14
        echo "
\t";
        // line 15
        if ((isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null)) {
            // line 16
            echo "\t<h3";
            if ((isset($context["GROUP_COLOR"]) ? $context["GROUP_COLOR"] : null)) {
                echo " style=\"color:#";
                echo (isset($context["GROUP_COLOR"]) ? $context["GROUP_COLOR"] : null);
                echo ";\"";
            }
            echo ">";
            echo (isset($context["GROUP_NAME"]) ? $context["GROUP_NAME"] : null);
            echo "</h3>
\t<div class=\"panel panel-default\">
\t\t<div class=\"panel-body\">
\t\t";
            // line 19
            if ((((isset($context["AVATAR_IMG"]) ? $context["AVATAR_IMG"] : null) || (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null)) || (isset($context["GROUP_RANK"]) ? $context["GROUP_RANK"] : null))) {
                // line 20
                echo "\t\t\t<div class=\"col-md-3 col-sm-4 col-xs-12 text-center\">
\t\t\t\t";
                // line 21
                if ((isset($context["AVATAR_IMG"]) ? $context["AVATAR_IMG"] : null)) {
                    echo "<p class=\"hidden-xs\">";
                    echo (isset($context["AVATAR_IMG"]) ? $context["AVATAR_IMG"] : null);
                    echo "</p>";
                }
                // line 22
                echo "\t\t\t\t";
                if ((isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null)) {
                    echo "<p>";
                    echo (isset($context["RANK_IMG"]) ? $context["RANK_IMG"] : null);
                    echo "</p>";
                }
                // line 23
                echo "\t\t\t\t";
                if ((isset($context["GROUP_RANK"]) ? $context["GROUP_RANK"] : null)) {
                    echo "<p>";
                    echo (isset($context["GROUP_RANK"]) ? $context["GROUP_RANK"] : null);
                    echo "</p>";
                }
                // line 24
                echo "\t\t\t</div>

\t\t\t<div class=\"col-md-9 col-sm-8 col-xs-12\">
\t\t\t\t";
                // line 27
                echo (isset($context["GROUP_DESC"]) ? $context["GROUP_DESC"] : null);
                echo " ";
                echo (isset($context["GROUP_TYPE"]) ? $context["GROUP_TYPE"] : null);
                echo "
\t\t\t</div>
\t\t";
            } else {
                // line 30
                echo "\t\t\t";
                echo (isset($context["GROUP_DESC"]) ? $context["GROUP_DESC"] : null);
                echo " ";
                echo (isset($context["GROUP_TYPE"]) ? $context["GROUP_TYPE"] : null);
                echo "
\t\t";
            }
            // line 32
            echo "\t\t</div>
\t</div>
\t";
        } else {
            // line 35
            echo "\t\t<h3>";
            echo (isset($context["PAGE_TITLE"]) ? $context["PAGE_TITLE"] : null);
            if ((isset($context["SEARCH_WORDS"]) ? $context["SEARCH_WORDS"] : null)) {
                echo $this->env->getExtension('phpbb')->lang("COLON");
                echo " <a href=\"";
                echo (isset($context["U_SEARCH_WORDS"]) ? $context["U_SEARCH_WORDS"] : null);
                echo "\">";
                echo (isset($context["SEARCH_WORDS"]) ? $context["SEARCH_WORDS"] : null);
                echo "</a>";
            }
            echo "</h3>

\t\t<ul class=\"pagination pagination-sm\">
\t\t\t";
            // line 38
            if (((isset($context["U_FIND_MEMBER"]) ? $context["U_FIND_MEMBER"] : null) && (!(isset($context["S_SEARCH_USER"]) ? $context["S_SEARCH_USER"] : null)))) {
                echo "<li><a href=\"";
                echo (isset($context["U_FIND_MEMBER"]) ? $context["U_FIND_MEMBER"] : null);
                echo "\" id=\"member_search\" data-alt-text=\"";
                echo addslashes($this->env->getExtension('phpbb')->lang("HIDE_MEMBER_SEARCH"));
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("FIND_USERNAME");
                echo "</a></li>";
            } elseif ((((isset($context["S_SEARCH_USER"]) ? $context["S_SEARCH_USER"] : null) && (isset($context["U_HIDE_FIND_MEMBER"]) ? $context["U_HIDE_FIND_MEMBER"] : null)) && (!(isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null)))) {
                echo "<li><a href=\"";
                echo (isset($context["U_HIDE_FIND_MEMBER"]) ? $context["U_HIDE_FIND_MEMBER"] : null);
                echo "\" id=\"member_search\" data-alt-text=\"";
                echo addslashes($this->env->getExtension('phpbb')->lang("FIND_USERNAME"));
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("HIDE_MEMBER_SEARCH");
                echo "</a></li>";
            }
            // line 39
            echo "\t\t\t";
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "first_char"));
            foreach ($context['_seq'] as $context["_key"] => $context["first_char"]) {
                // line 40
                echo "\t\t\t\t<li><a href=\"";
                echo $this->getAttribute((isset($context["first_char"]) ? $context["first_char"] : null), "U_SORT");
                echo "\">";
                echo $this->getAttribute((isset($context["first_char"]) ? $context["first_char"] : null), "DESC");
                echo "</a></li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['first_char'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "\t\t</ul>
\t\t
\t\t<div class=\"pages clearfix\">
\t\t\t";
            // line 45
            if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
                echo " 
\t\t\t\t";
                // line 46
                $location = "pagination.html";
                $namespace = false;
                if (strpos($location, '@') === 0) {
                    $namespace = substr($location, 1, strpos($location, '/') - 1);
                    $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                    $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
                }
                $this->env->loadTemplate("pagination.html")->display($context);
                if ($namespace) {
                    $this->env->setNamespaceLookUpOrder($previous_look_up_order);
                }
                // line 47
                echo "\t\t\t";
            }
            // line 48
            echo "\t\t\t<div class=\"btn-group pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t\t\t<span class=\"btn btn-default disabled\">";
            // line 49
            echo (isset($context["TOTAL_USERS"]) ? $context["TOTAL_USERS"] : null);
            echo "</span>
\t\t\t\t<span class=\"btn btn-default disabled\">";
            // line 50
            echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
            echo "</span>
\t\t\t</div>
\t\t</div>
\t";
        }
        // line 54
        echo "
\t";
        // line 55
        if ((((isset($context["S_LEADERS_SET"]) ? $context["S_LEADERS_SET"] : null) || (!(isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null))) || (!twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "memberrow"))))) {
            // line 56
            echo "\t<div class=\"table-responsive\">
\t\t<table class=\"table table-bordered\" id=\"memberlist\">
\t\t<thead>
\t\t<tr>
\t\t\t<th class=\"width-35\" data-dfn=\"";
            // line 60
            echo $this->env->getExtension('phpbb')->lang("RANK");
            echo $this->env->getExtension('phpbb')->lang("COMMA_SEPARATOR");
            if (((isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null) && twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "memberrow")))) {
                echo $this->env->getExtension('phpbb')->lang("GROUP_LEADER");
            } else {
                echo $this->env->getExtension('phpbb')->lang("USERNAME");
            }
            echo "\"><span class=\"rank-img hidden-xs pull-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\"><a href=\"";
            echo (isset($context["U_SORT_RANK"]) ? $context["U_SORT_RANK"] : null);
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("RANK");
            echo "</a></span><a href=\"";
            echo (isset($context["U_SORT_USERNAME"]) ? $context["U_SORT_USERNAME"] : null);
            echo "\">";
            if (((isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null) && twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "memberrow")))) {
                echo $this->env->getExtension('phpbb')->lang("GROUP_LEADER");
            } else {
                echo $this->env->getExtension('phpbb')->lang("USERNAME");
            }
            echo "</a></th>
\t\t\t<th class=\"text-center\"><a href=\"";
            // line 61
            echo (isset($context["U_SORT_POSTS"]) ? $context["U_SORT_POSTS"] : null);
            echo "#memberlist\">";
            echo $this->env->getExtension('phpbb')->lang("POSTS");
            echo "</a></th>
\t\t\t<th class=\"width-35\">";
            // line 62
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "custom_fields"));
            foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
                if ((!$this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_FIRST_ROW"))) {
                    echo $this->env->getExtension('phpbb')->lang("COMMA_SEPARATOR");
                    echo " ";
                }
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            echo "</th>
\t\t\t<th><a href=\"";
            // line 63
            echo (isset($context["U_SORT_JOINED"]) ? $context["U_SORT_JOINED"] : null);
            echo "#memberlist\">";
            echo $this->env->getExtension('phpbb')->lang("JOINED");
            echo "</a></th>
\t\t\t";
            // line 64
            if ((isset($context["U_SORT_ACTIVE"]) ? $context["U_SORT_ACTIVE"] : null)) {
                echo "<th><a href=\"";
                echo (isset($context["U_SORT_ACTIVE"]) ? $context["U_SORT_ACTIVE"] : null);
                echo "#memberlist\">";
                echo $this->env->getExtension('phpbb')->lang("LAST_ACTIVE");
                echo "</a></th>";
            }
            // line 65
            echo "\t\t</tr>
\t\t</thead>
\t\t<tbody>
\t";
        }
        // line 69
        echo "\t\t";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "memberrow"));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["memberrow"]) {
            // line 70
            echo "\t\t\t";
            if ((isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null)) {
                // line 71
                echo "\t\t\t\t";
                if (((!$this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "S_GROUP_LEADER")) && (!$this->getAttribute((isset($context["definition"]) ? $context["definition"] : null), "S_MEMBER_HEADER")))) {
                    // line 72
                    echo "\t\t\t\t";
                    if (((isset($context["S_LEADERS_SET"]) ? $context["S_LEADERS_SET"] : null) && $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "S_FIRST_ROW"))) {
                        // line 73
                        echo "\t\t\t\t<tr class=\"bg1\">
\t\t\t\t\t<td colspan=\"";
                        // line 74
                        if ((isset($context["U_SORT_ACTIVE"]) ? $context["U_SORT_ACTIVE"] : null)) {
                            echo "5";
                        } else {
                            echo "4";
                        }
                        echo "\">&nbsp;</td>
\t\t\t\t</tr>
\t\t\t\t";
                    }
                    // line 77
                    if ((isset($context["S_LEADERS_SET"]) ? $context["S_LEADERS_SET"] : null)) {
                        // line 78
                        echo "\t\t</tbody>
\t\t</table>
\t</div>
";
                    }
                    // line 82
                    echo "<div class=\"table-responsive\">
\t<table class=\"table table-bordered\">
\t<thead>
\t<tr>
\t";
                    // line 86
                    if ((!(isset($context["S_LEADERS_SET"]) ? $context["S_LEADERS_SET"] : null))) {
                        // line 87
                        echo "\t\t<th class=\"width-35\" data-dfn=\"";
                        echo $this->env->getExtension('phpbb')->lang("RANK");
                        echo $this->env->getExtension('phpbb')->lang("COMMA_SEPARATOR");
                        echo $this->env->getExtension('phpbb')->lang("USERNAME");
                        echo "\"><span class=\"rank-img hidden-xs pull-";
                        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                        echo "\"><a href=\"";
                        echo (isset($context["U_SORT_RANK"]) ? $context["U_SORT_RANK"] : null);
                        echo "\">";
                        echo $this->env->getExtension('phpbb')->lang("RANK");
                        echo "</a></span><a href=\"";
                        echo (isset($context["U_SORT_USERNAME"]) ? $context["U_SORT_USERNAME"] : null);
                        echo "\">";
                        if ((isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null)) {
                            echo $this->env->getExtension('phpbb')->lang("GROUP_MEMBERS");
                        } else {
                            echo $this->env->getExtension('phpbb')->lang("USERNAME");
                        }
                        echo "</a></th>
\t\t<th class=\"text-center\"><a href=\"";
                        // line 88
                        echo (isset($context["U_SORT_POSTS"]) ? $context["U_SORT_POSTS"] : null);
                        echo "#memberlist\">";
                        echo $this->env->getExtension('phpbb')->lang("POSTS");
                        echo "</a></th>
\t\t<th class=\"width-35\">";
                        // line 89
                        $context['_parent'] = (array) $context;
                        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "custom_fields"));
                        foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
                            if ((!$this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_FIRST_ROW"))) {
                                echo $this->env->getExtension('phpbb')->lang("COMMA_SEPARATOR");
                                echo " ";
                            }
                            echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        echo "</th>
\t\t<th><a href=\"";
                        // line 90
                        echo (isset($context["U_SORT_JOINED"]) ? $context["U_SORT_JOINED"] : null);
                        echo "#memberlist\">";
                        echo $this->env->getExtension('phpbb')->lang("JOINED");
                        echo "</a></th>
\t\t";
                        // line 91
                        if ((isset($context["U_SORT_ACTIVE"]) ? $context["U_SORT_ACTIVE"] : null)) {
                            echo "<th><a href=\"";
                            echo (isset($context["U_SORT_ACTIVE"]) ? $context["U_SORT_ACTIVE"] : null);
                            echo "#memberlist\">";
                            echo $this->env->getExtension('phpbb')->lang("LAST_ACTIVE");
                            echo "</a></th>";
                        }
                        // line 92
                        echo "\t";
                    } elseif ((isset($context["S_SHOW_GROUP"]) ? $context["S_SHOW_GROUP"] : null)) {
                        // line 93
                        echo "\t\t<th class=\"width-35\">";
                        echo $this->env->getExtension('phpbb')->lang("GROUP_MEMBERS");
                        echo "</th>
\t\t<th class=\"text-center\">";
                        // line 94
                        echo $this->env->getExtension('phpbb')->lang("POSTS");
                        echo "</th>
\t\t<th class=\"width-35\">";
                        // line 95
                        $context['_parent'] = (array) $context;
                        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "custom_fields"));
                        foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
                            if ((!$this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "S_FIRST_ROW"))) {
                                echo $this->env->getExtension('phpbb')->lang("COMMA_SEPARATOR");
                                echo " ";
                            }
                            echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_NAME");
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        echo "</th>
\t\t<th>";
                        // line 96
                        echo $this->env->getExtension('phpbb')->lang("JOINED");
                        echo "</th>
\t\t";
                        // line 97
                        if ((isset($context["U_SORT_ACTIVE"]) ? $context["U_SORT_ACTIVE"] : null)) {
                            echo "<th>";
                            echo $this->env->getExtension('phpbb')->lang("LAST_ACTIVE");
                            echo "</th>";
                        }
                        // line 98
                        echo "\t";
                    }
                    // line 99
                    echo "\t</tr>
\t</thead>
\t<tbody>
\t\t\t\t\t";
                    // line 102
                    $value = 1;
                    $context['definition']->set('S_MEMBER_HEADER', $value);
                    // line 103
                    echo "\t\t\t\t";
                }
                // line 104
                echo "\t\t\t";
            }
            // line 105
            echo "
\t<tr class=\"";
            // line 106
            if (($this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "S_ROW_COUNT") % 2 == 0)) {
                echo "bg1";
            } else {
                echo "bg2";
            }
            echo "\">
\t\t<td class=\"width-35\">";
            // line 107
            if ($this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "RANK_IMG")) {
                echo "<span class=\"rank-img hidden-xs pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "RANK_IMG");
                echo "</span>";
            } else {
                echo "<span class=\"rank-img hidden-xs pull-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\">";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "RANK_TITLE");
                echo "</span>";
            }
            if (((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null) && (!(isset($context["S_SELECT_SINGLE"]) ? $context["S_SELECT_SINGLE"] : null)))) {
                echo "<input type=\"checkbox\" name=\"user\" value=\"";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "USERNAME");
                echo "\" /> ";
            }
            echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "USERNAME_FULL");
            if ((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null)) {
                echo "<br />[&nbsp;<a href=\"#\" onclick=\"insert_single_user('#results', '";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "A_USERNAME");
                echo "'); return false;\">";
                echo $this->env->getExtension('phpbb')->lang("SELECT");
                echo "</a>&nbsp;]";
            }
            echo "</td>
\t\t<td class=\"text-center\">";
            // line 108
            if (($this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "POSTS") && (isset($context["S_DISPLAY_SEARCH"]) ? $context["S_DISPLAY_SEARCH"] : null))) {
                echo "<a href=\"";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "U_SEARCH_USER");
                echo "\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("SEARCH_USER_POSTS");
                echo "\">";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "POSTS");
                echo "</a>";
            } else {
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "POSTS");
            }
            echo "</td>
\t\t<td class=\"width-35\">";
            // line 109
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "custom_fields"));
            $context['_iterated'] = false;
            foreach ($context['_seq'] as $context["_key"] => $context["custom_fields"]) {
                echo "<div>";
                echo $this->getAttribute((isset($context["custom_fields"]) ? $context["custom_fields"] : null), "PROFILE_FIELD_VALUE");
                echo "</div>";
                $context['_iterated'] = true;
            }
            if (!$context['_iterated']) {
                echo "&nbsp;";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['custom_fields'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            echo "</td>
\t\t<td>";
            // line 110
            echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "JOINED");
            echo "</td>
\t\t";
            // line 111
            if ((isset($context["S_VIEWONLINE"]) ? $context["S_VIEWONLINE"] : null)) {
                echo "<td>";
                echo $this->getAttribute((isset($context["memberrow"]) ? $context["memberrow"] : null), "LAST_ACTIVE");
                echo "&nbsp;</td>";
            }
            // line 112
            echo "\t</tr>
\t\t";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 114
            echo "\t<tr class=\"bg1\">
\t\t<td class=\"text-center\" colspan=\"";
            // line 115
            if ((isset($context["S_VIEWONLINE"]) ? $context["S_VIEWONLINE"] : null)) {
                echo "5";
            } else {
                echo "4";
            }
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("NO_MEMBERS");
            echo "</td>
\t</tr>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['memberrow'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 118
        echo "\t</tbody>
\t</table>
</div>

";
        // line 122
        if (((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null) && (!(isset($context["S_SELECT_SINGLE"]) ? $context["S_SELECT_SINGLE"] : null)))) {
            // line 123
            echo "<fieldset class=\"panel-group text-";
            echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
            echo "\">
\t<div class=\"btn-group\">
\t\t<a href=\"#\" onclick=\"marklist('results', 'user', false); return false;\" class=\"btn btn-warning\">";
            // line 125
            echo $this->env->getExtension('phpbb')->lang("UNMARK_ALL");
            echo "</a>
\t\t<input type=\"submit\" name=\"submit\" value=\"";
            // line 126
            echo $this->env->getExtension('phpbb')->lang("SELECT_MARKED");
            echo "\" class=\"btn btn-default\" />
\t\t<a href=\"#\" onclick=\"marklist('results', 'user', true); return false;\" class=\"btn btn-info\">";
            // line 127
            echo $this->env->getExtension('phpbb')->lang("MARK_ALL");
            echo "</a>
\t</div>
</fieldset>
";
        }
        // line 131
        echo "
";
        // line 132
        if ((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null)) {
            // line 133
            echo "</form>
<form method=\"post\" id=\"sort-results\" action=\"";
            // line 134
            echo (isset($context["S_MODE_ACTION"]) ? $context["S_MODE_ACTION"] : null);
            echo "\">
";
        }
        // line 136
        echo "
";
        // line 137
        if (((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null) && (!(isset($context["S_SEARCH_USER"]) ? $context["S_SEARCH_USER"] : null)))) {
            // line 138
            echo "<fieldset class=\"panel-group text-center\">
\t<label for=\"sk\">";
            // line 139
            echo $this->env->getExtension('phpbb')->lang("SELECT_SORT_METHOD");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</label> <select name=\"sk\" id=\"sk\">";
            echo (isset($context["S_MODE_SELECT"]) ? $context["S_MODE_SELECT"] : null);
            echo "</select>
\t<label for=\"sd\">";
            // line 140
            echo $this->env->getExtension('phpbb')->lang("ORDER");
            echo "</label> <select name=\"sd\" id=\"sd\">";
            echo (isset($context["S_ORDER_SELECT"]) ? $context["S_ORDER_SELECT"] : null);
            echo "</select>
\t<input type=\"submit\" name=\"sort\" value=\"";
            // line 141
            echo $this->env->getExtension('phpbb')->lang("SUBMIT");
            echo "\" class=\"btn btn-default\" />
</fieldset>
";
        }
        // line 144
        echo "
</form>

<div class=\"pages clearfix\">
\t";
        // line 148
        if (twig_length_filter($this->env, $this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"))) {
            echo " 
\t\t";
            // line 149
            $location = "pagination.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("pagination.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 150
            echo "\t";
        }
        // line 151
        echo "\t<div class=\"btn-group pull-";
        echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
        echo "\">
\t\t<span class=\"btn btn-default disabled\">";
        // line 152
        echo (isset($context["TOTAL_USERS"]) ? $context["TOTAL_USERS"] : null);
        echo "</span>
\t\t<span class=\"btn btn-default disabled\">";
        // line 153
        echo (isset($context["PAGE_NUMBER"]) ? $context["PAGE_NUMBER"] : null);
        echo "</span>
\t</div>
</div>

";
        // line 157
        if ((isset($context["S_IN_SEARCH_POPUP"]) ? $context["S_IN_SEARCH_POPUP"] : null)) {
            // line 158
            echo "\t";
            $location = "simple_footer.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("simple_footer.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        } else {
            // line 160
            echo "\t";
            $location = "jumpbox.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("jumpbox.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
            // line 161
            echo "\t";
            $location = "overall_footer.html";
            $namespace = false;
            if (strpos($location, '@') === 0) {
                $namespace = substr($location, 1, strpos($location, '/') - 1);
                $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
                $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
            }
            $this->env->loadTemplate("overall_footer.html")->display($context);
            if ($namespace) {
                $this->env->setNamespaceLookUpOrder($previous_look_up_order);
            }
        }
    }

    public function getTemplateName()
    {
        return "memberlist_body.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  732 => 161,  719 => 160,  705 => 158,  703 => 157,  696 => 153,  692 => 152,  687 => 151,  684 => 150,  672 => 149,  668 => 148,  662 => 144,  656 => 141,  650 => 140,  643 => 139,  640 => 138,  638 => 137,  635 => 136,  630 => 134,  627 => 133,  625 => 132,  622 => 131,  615 => 127,  611 => 126,  607 => 125,  601 => 123,  599 => 122,  593 => 118,  578 => 115,  575 => 114,  569 => 112,  563 => 111,  559 => 110,  541 => 109,  527 => 108,  498 => 107,  490 => 106,  487 => 105,  484 => 104,  481 => 103,  478 => 102,  473 => 99,  470 => 98,  464 => 97,  460 => 96,  445 => 95,  441 => 94,  436 => 93,  433 => 92,  425 => 91,  419 => 90,  404 => 89,  398 => 88,  377 => 87,  375 => 86,  369 => 82,  363 => 78,  361 => 77,  351 => 74,  348 => 73,  345 => 72,  342 => 71,  339 => 70,  333 => 69,  327 => 65,  319 => 64,  313 => 63,  298 => 62,  292 => 61,  268 => 60,  262 => 56,  260 => 55,  257 => 54,  250 => 50,  246 => 49,  241 => 48,  238 => 47,  226 => 46,  222 => 45,  217 => 42,  206 => 40,  201 => 39,  183 => 38,  168 => 35,  163 => 32,  155 => 30,  147 => 27,  142 => 24,  135 => 23,  128 => 22,  122 => 21,  119 => 20,  117 => 19,  104 => 16,  102 => 15,  99 => 14,  93 => 11,  90 => 10,  78 => 9,  71 => 8,  58 => 7,  47 => 4,  34 => 3,  21 => 2,  19 => 1,);
    }
}
